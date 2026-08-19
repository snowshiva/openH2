<script lang="ts">
	import { links } from '$lib/nav';
</script>

<footer class="border-border border-t">
	<div class="w-full px-4 py-6 text-sm">
		<nav class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
			{#each links as link, i (link.href)}
				{#if i > 0}
					<span class="text-muted-foreground select-none" aria-hidden="true">|</span>
				{/if}
				<a href={link.href} class="link">
					{link.label}
				</a>
			{/each}
		</nav>
		<p class="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed">
			Everything on openH2.org is educational content, not medical advice. Consult a qualified
			healthcare provider before using hydrogen for any health purpose. Building and operating
			electrolysis equipment involves electricity and flammable gas; you assume all risk. Read the
			full
			<a href="/disclaimer" class="link">disclaimer</a>.
		</p>
		<p class="text-muted-foreground mt-3 text-center">
			© {new Date().getFullYear()} openH2.org
			<span class="select-none" aria-hidden="true">·</span>
			<a href="/licensing" class="link">Licensing</a>
			<span class="select-none" aria-hidden="true">·</span>
			<a href="/disclaimer" class="link">Disclaimer</a>
		</p>
	</div>
</footer>
