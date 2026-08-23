<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BubbleField from '$lib/components/BubbleField.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// The site answers on both openh2.org and www.openh2.org. Point search
	// engines at the bare domain so the two are not treated as duplicates.
	const canonical = $derived(`https://openh2.org${page.url.pathname}`);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={canonical} />
</svelte:head>

<BubbleField />

<div class="relative z-10 flex min-h-screen flex-col">
	<Navigation />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
