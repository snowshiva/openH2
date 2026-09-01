<script lang="ts">
	// Every paid/affiliate outbound link on the site goes through here, so the
	// rel attributes and the visible marker stay correct in one place instead of
	// per page. Amazon's operating agreement and search engines both want these
	// marked, and readers should be able to see where a link lands before
	// clicking it.
	//
	// The badge is inline-block on purpose: text-decoration from the parent
	// anchor propagates through inline descendants and cannot be cancelled by
	// them, but it is not drawn through atomic inline-level boxes. That is what
	// keeps the link underline from striking through the badge.
	import type { Snippet } from 'svelte';

	let { href, children }: { href: string; children: Snippet } = $props();
</script>

<!-- prettier-ignore -->
<a {href} target="_blank" rel="noopener noreferrer nofollow sponsored" class="link"
	>{@render children()}<span class="border-border text-muted-foreground ml-1 inline-block rounded-full border px-1.5 align-[0.09em] text-[0.65rem] leading-[1.5] font-medium tracking-wide uppercase">Amazon</span></a
>
