<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/state';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { links } from '$lib/nav';
	import { site } from '$lib/site';
	import logo from '$lib/assets/logo.svg';

	let open = $state(false);

	function close() {
		open = false;
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<header class="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
	<nav class="flex w-full items-center justify-between px-4 py-3">
		<a href="/" class="brand flex items-center gap-2 text-lg font-semibold tracking-tight">
			<img src={logo} alt="" class="brand-mark h-8 w-auto" />
			<span>open<span class="text-accent">H₂</span></span>
		</a>
		<div class="flex items-center gap-1">
			<!-- The channel is where the build videos live, so it gets a permanent
			     spot in the header rather than a line buried in the menu. -->
			<a
				href={site.youtube}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="openH2 on YouTube"
				class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2 transition-colors"
			>
				<Icon icon="lucide:youtube" class="h-6 w-6" />
			</a>
			<button
				onclick={() => (open = true)}
				aria-label="Open menu"
				class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2 transition-colors"
			>
				<Icon icon="lucide:menu" class="h-6 w-6" />
			</button>
		</div>
	</nav>
</header>

{#if open}
	<div
		class="fixed inset-0 z-50 bg-black/40"
		transition:fade={{ duration: 150 }}
		onclick={close}
		aria-hidden="true"
	></div>
	<aside
		class="border-border bg-background fixed top-0 right-0 z-50 flex h-full w-72 flex-col border-l shadow-xl"
		transition:fly={{ x: 300, duration: 250, opacity: 1 }}
		aria-label="Site menu"
	>
		<div class="border-border flex items-center justify-between border-b px-4 py-3">
			<button
				onclick={close}
				aria-label="Close menu"
				class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2 transition-colors"
			>
				<Icon icon="lucide:x" class="h-5 w-5" />
			</button>
			<ThemeToggle onToggle={close} />
		</div>
		<nav class="flex flex-col gap-1 p-4">
			{#each links as link (link.href)}
				<a
					href={link.href}
					onclick={close}
					class="rounded-lg px-3 py-2 text-base transition-colors {page.url.pathname === link.href
						? 'bg-muted text-foreground font-medium'
						: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
				>
					{link.label}
				</a>
				{#each link.children ?? [] as child (child.href)}
					<a
						href={child.href}
						onclick={close}
						class="ml-4 rounded-lg px-3 py-1.5 text-sm transition-colors {page.url.pathname ===
						child.href
							? 'bg-muted text-foreground font-medium'
							: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
					>
						{child.label}
					</a>
				{/each}
			{/each}
			<a
				href={site.youtube}
				target="_blank"
				rel="noopener noreferrer"
				onclick={close}
				class="text-muted-foreground hover:bg-muted hover:text-foreground border-border mt-2 flex items-center gap-2 rounded-lg border-t px-3 pt-4 pb-2 text-base transition-colors"
			>
				<Icon icon="lucide:youtube" class="h-5 w-5" />
				YouTube
				<Icon icon="lucide:external-link" class="ml-auto h-4 w-4 opacity-60" />
			</a>
		</nav>
	</aside>
{/if}

<style>
	/* A quick full turn of the mark when the wordmark is hovered. Using an
	   animation rather than a transition means it always spins forward instead
	   of unwinding backwards when the pointer leaves. */
	.brand:hover .brand-mark,
	.brand:focus-visible .brand-mark {
		animation: brand-spin 0.55s cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes brand-spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.brand:hover .brand-mark,
		.brand:focus-visible .brand-mark {
			animation: none;
		}
	}
</style>
