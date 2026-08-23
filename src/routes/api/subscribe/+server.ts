import { json, type RequestHandler } from '@sveltejs/kit';
import { env as devEnv } from '$env/dynamic/private';

// A server route, so it must opt out of the site-wide prerender.
export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const say = (ok: boolean, message: string, status = ok ? 200 : 400) =>
	json({ ok, message }, { status });

export const POST: RequestHandler = async ({ request, platform, getClientAddress }) => {
	let body: { email?: unknown; company?: unknown };
	try {
		body = await request.json();
	} catch {
		return say(false, 'Could not read that request.');
	}

	// Honeypot: a field no human sees. Bots fill it in, so accept and discard.
	if (typeof body.company === 'string' && body.company.trim() !== '') {
		return say(true, 'Thanks, you are on the list.');
	}

	const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
	if (!email) return say(false, 'Please enter your email address.');
	if (email.length > 254 || !EMAIL.test(email)) {
		return say(false, 'That does not look like a valid email address.');
	}

	// platform.env in production (Worker secrets and vars), $env in local dev.
	const apiKey = platform?.env?.BREVO_API_KEY ?? devEnv.BREVO_API_KEY;
	const listId = Number(platform?.env?.BREVO_LIST_ID ?? devEnv.BREVO_LIST_ID ?? 0);

	if (!apiKey) {
		console.error('subscribe: BREVO_API_KEY is not configured');
		return say(false, 'Signups are temporarily unavailable. Please try again later.', 503);
	}

	try {
		const res = await fetch('https://api.brevo.com/v3/contacts', {
			method: 'POST',
			headers: {
				'api-key': apiKey,
				'content-type': 'application/json',
				accept: 'application/json'
			},
			body: JSON.stringify({
				email,
				listIds: listId ? [listId] : undefined,
				updateEnabled: true,
				attributes: { SIGNUP_SOURCE: 'openh2.org', SIGNUP_IP: getClientAddress() }
			})
		});

		if (res.ok || res.status === 201 || res.status === 204) {
			return say(true, 'Thanks, you are on the list.');
		}

		// Brevo returns 400 duplicate_parameter when the contact already exists.
		const detail = (await res.json().catch(() => ({}))) as { code?: string; message?: string };
		if (detail.code === 'duplicate_parameter') {
			return say(true, 'You are already on the list.');
		}

		// Log the real reason, tell the visitor something useful but not internal.
		console.error('subscribe: brevo responded', res.status, detail.code, detail.message);
		return say(false, 'Could not add you just now. Please try again later.', 502);
	} catch (err) {
		console.error('subscribe: request to brevo failed', err);
		return say(false, 'Could not reach the mailing list service. Please try again later.', 502);
	}
};
