<script lang="ts">
	import { onMount } from 'svelte';

	type Section = { id: string; label: string; children?: Section[] };

	let { sections, title = 'On this page' }: { sections: Section[]; title?: string } = $props();

	const flat = $derived(sections.flatMap((s) => [s, ...(s.children ?? [])]));

	let seen = $state('');
	const active = $derived(seen || flat[0]?.id);

	onMount(() => {
		const visible = new Set<string>();
		const order = flat.map((s) => s.id);

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
				{#if section.children?.length}
					<ul class="space-y-1">
						{#each section.children as child (child.id)}
							<li>
								<a
									href="#{child.id}"
									class="block border-l-2 py-1 pr-1 pl-6 no-underline transition-colors {active ===
									child.id
										? 'border-accent text-foreground font-medium'
										: 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'}"
								>
									{child.label}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
