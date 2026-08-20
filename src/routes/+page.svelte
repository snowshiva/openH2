<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import PageHighlights from '$lib/components/PageHighlights.svelte';
</script>

<svelte:head>
	<title>openH2 | H₂ for everyone</title>
	<meta
		name="description"
		content="Open source knowledge and hardware for molecular hydrogen: health, safety, and electrolysis experimentation."
	/>
</svelte:head>

<Hero />
<Intro />
<PageHighlights />
