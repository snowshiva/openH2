<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BubbleField from '$lib/components/BubbleField.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<BubbleField />

<div class="relative z-10 flex min-h-screen flex-col">
	<Navigation />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
