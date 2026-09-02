<script lang="ts">
	// Every paid/affiliate outbound link on the site goes through here, so the
	// rel attributes and the visible Amazon badge stay correct in one place
	// instead of per page. Amazon's operating agreement and search engines both
	// want these marked, and readers should be able to see where a link lands
	// before clicking it.
	//
	// Rendered as one store row: badge first, then the label. Sitting the badges
	// in a left column keeps a list of options scannable, and inline-flex with
	// items-baseline lines the badge up with the label text without the magic
	// vertical-align number an inline badge needs.
	import type { Snippet } from 'svelte';

	let { href, children }: { href: string; children: Snippet } = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer nofollow sponsored"
	class="group text-accent inline-flex items-baseline gap-1.5 no-underline"
>
	<span
		class="bg-badge text-badge-foreground shrink-0 rounded-full px-1 text-[0.58rem] leading-[1.45] font-semibold tracking-wide uppercase"
		>Amazon</span
	>
	<span class="group-hover:underline">{@render children()}</span>
</a>
