<script lang="ts">
	// Every paid/affiliate outbound link on the site goes through here, so the
	// rel attributes stay correct in one place instead of per page. Amazon's
	// operating agreement and search engines both want these marked.
	import type { Snippet } from 'svelte';

	let { href, children }: { href: string; children: Snippet } = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer nofollow sponsored" class="link">
	{@render children()}
</a>
