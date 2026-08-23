<script lang="ts">
	import Icon from '@iconify/svelte';

	let {
		heading = 'Follow the build',
		blurb = 'Occasional updates when plans, kits, or new bench results are published. No spam, and you can leave whenever you like.'
	}: { heading?: string; blurb?: string } = $props();

	let email = $state('');
	let company = $state(''); // honeypot, hidden from people
	let status = $state<'idle' | 'sending' | 'done' | 'error'>('idle');
	let message = $state('');

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'sending') return;
		status = 'sending';
		message = '';

		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email, company })
			});
			const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };

			if (res.ok && data.ok) {
				status = 'done';
				message = data.message ?? 'Thanks, you are on the list.';
				email = '';
			} else {
				status = 'error';
				message = data.message ?? 'Something went wrong. Please try again.';
			}
		} catch {
			status = 'error';
			message = 'Could not reach the server. Please check your connection and try again.';
		}
	}
</script>

<div class="border-border bg-card rounded-lg border p-6">
	<h2 class="text-xl font-semibold tracking-tight">{heading}</h2>
	<p class="text-muted-foreground mt-2 text-sm">{blurb}</p>

	{#if status === 'done'}
		<p class="text-foreground mt-4 flex items-center gap-2 font-medium" aria-live="polite">
			<Icon icon="lucide:check" class="text-accent h-5 w-5 shrink-0" />
			{message}
		</p>
	{:else}
		<form onsubmit={submit} class="mt-4">
			<div class="flex flex-col gap-2 sm:flex-row">
				<label class="sr-only" for="subscribe-email">Email address</label>
				<input
					id="subscribe-email"
					type="email"
					name="email"
					bind:value={email}
					required
					autocomplete="email"
					placeholder="you@example.com"
					disabled={status === 'sending'}
					class="border-border bg-background text-foreground focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 disabled:opacity-60"
				/>
				<button
					type="submit"
					disabled={status === 'sending'}
					class="bg-accent text-accent-foreground rounded-lg px-4 py-2 font-medium whitespace-nowrap transition-opacity hover:opacity-90 disabled:opacity-60"
				>
					{status === 'sending' ? 'Adding you…' : 'Subscribe'}
				</button>
			</div>

			<!-- Honeypot: hidden from people, tempting to bots. -->
			<div class="hidden" aria-hidden="true">
				<label for="subscribe-company">Company</label>
				<input id="subscribe-company" name="company" bind:value={company} tabindex="-1" />
			</div>

			{#if status === 'error'}
				<p class="mt-3 text-sm" style="color: var(--danger)" aria-live="polite">{message}</p>
			{/if}
		</form>
	{/if}
</div>
