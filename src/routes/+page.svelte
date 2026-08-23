<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import PageHighlights from '$lib/components/PageHighlights.svelte';
	import SubscribeForm from '$lib/components/SubscribeForm.svelte';
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

<section class="mx-auto max-w-5xl px-4">
	<div class="mx-auto max-w-2xl">
		<SubscribeForm />
	</div>
</section>
