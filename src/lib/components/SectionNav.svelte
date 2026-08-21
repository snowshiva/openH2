<script lang="ts">
	import { onMount } from 'svelte';

	type Section = { id: string; label: string };

	let { sections, title = 'On this page' }: { sections: Section[]; title?: string } = $props();

	let seen = $state('');
	const active = $derived(seen || sections[0]?.id);

	onMount(() => {
		const visible = new Set<string>();
		const order = sections.map((s) => s.id);

		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) visible.add(e.target.id);
					else visible.delete(e.target.id);
				}
				// The heading nearest the top of the reading area wins.
				const first = order.find((id) => visible.has(id));
				if (first) seen = first;
			},
			// Only count headings in the upper band of the viewport, so the
			// highlight tracks what you are actually reading.
			{ rootMargin: '-72px 0px -65% 0px' }
		);

		for (const id of order) {
			const el = document.getElementById(id);
			if (el) io.observe(el);
		}

		return () => io.disconnect();
	});
</script>

<nav
	aria-label={title}
	class="border-border bg-card/60 mb-8 rounded-lg border p-4 lg:sticky lg:top-20 lg:mb-0 lg:border-0 lg:bg-transparent lg:p-0"
>
	<p class="text-muted-foreground text-xs font-semibold tracking-wide uppercase">{title}</p>
	<ul class="mt-3 space-y-1 text-sm">
		{#each sections as section (section.id)}
			<li>
				<a
					href="#{section.id}"
					class="block border-l-2 py-1 pl-3 no-underline transition-colors {active === section.id
						? 'border-accent text-foreground font-medium'
						: 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'}"
				>
					{section.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
