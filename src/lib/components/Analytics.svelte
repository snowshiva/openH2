<script lang="ts">
	/* Google Analytics 4. Loads only on the production domain, so local dev, the
	   dev Worker, and workers.dev previews never pollute the numbers. GA4's enhanced
	   measurement picks up client-side navigations, so there is no manual page_view. */
	import { onMount } from 'svelte';
	import { site } from '$lib/site';

	onMount(() => {
		const id = site.analyticsId;
		const host = location.hostname;
		if (!id || (host !== site.domain && host !== `www.${site.domain}`)) return;

		const w = window as unknown as { dataLayer: unknown[] };
		w.dataLayer = w.dataLayer || [];
		// gtag.js expects the raw `arguments` object, not an array.
		function gtag(..._args: unknown[]) {
			w.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', id);

		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
		document.head.appendChild(script);
	});
</script>
