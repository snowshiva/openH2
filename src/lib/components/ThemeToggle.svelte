<script lang="ts">
	import Icon from '@iconify/svelte';

	let { onToggle }: { onToggle?: () => void } = $props();

	let dark = $state(false);

	$effect(() => {
		dark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
		onToggle?.();
	}
</script>

<button
	onclick={toggle}
	aria-label="Toggle theme"
	class="border-border text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg border p-2 transition-colors"
>
	<Icon icon={dark ? 'lucide:sun' : 'lucide:moon'} class="h-5 w-5" />
</button>
