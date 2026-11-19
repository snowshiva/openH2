<script lang="ts">
	import Icon from '@iconify/svelte';
	import { site } from '$lib/site';
</script>

<section class="mx-auto flex max-w-5xl flex-col items-center px-4 pt-24 pb-20 text-center md:pt-32">
	<h1 class="max-w-2xl text-4xl font-bold tracking-tight text-balance md:text-6xl">
		H<sub>2</sub> for <span class="text-accent">everyone</span>
	</h1>
	<p class="text-muted-foreground mt-6 max-w-xl text-lg text-balance">
		Open source knowledge and hardware for molecular hydrogen: health, safety, and electrolysis
		experimentation.
	</p>
	<div class="mt-10 aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
		<iframe
			class="h-full w-full"
			src="https://www.youtube-nocookie.com/embed/EIqAXF90uas"
			title="openH2 on YouTube"
			loading="lazy"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
	<a
		href={site.youtube}
		target="_blank"
		rel="noopener noreferrer"
		class="bg-accent text-accent-foreground mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold no-underline shadow transition-opacity hover:opacity-90"
	>
		<Icon icon="lucide:youtube" class="h-5 w-5" />
		Watch the build videos on YouTube
	</a>
</section>
