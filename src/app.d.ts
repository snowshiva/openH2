// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				/** Brevo API key. Set with: wrangler secret put BREVO_API_KEY */
				BREVO_API_KEY?: string;
				/** Brevo list id new subscribers are added to. Plain var in wrangler.jsonc. */
				BREVO_LIST_ID?: string;
			};
		}
	}
}

export {};
