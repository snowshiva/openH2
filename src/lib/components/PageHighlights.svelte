<script lang="ts">
	import Icon from '@iconify/svelte';

	const pages = [
		{
			href: '/research',
			icon: 'lucide:microscope',
			title: 'Research',
			body: 'Studies, findings, and running notes on molecular hydrogen: what the science says, what is still open, and what we are testing on the bench.'
		},
		{
			href: '/plans-and-parts',
			icon: 'lucide:wrench',
			title: 'Plans & Parts',
			body: 'Open hardware you can build: step-by-step plans, parts lists, and schematics for generating hydrogen safely and affordably at home, plus kits and prebuilt machines if you would rather not start from scratch.'
		},
		{
			href: '/health-and-h2',
			icon: 'lucide:heart-pulse',
			title: 'Health & H₂',
			body: 'The health side of hydrogen without the hype: how hydrogen water and gas are used, and what the evidence actually supports.'
		}
	];
</script>

<section class="border-border bg-muted/50 border-t">
	<div class="mx-auto max-w-5xl px-4">
		<div class="grid gap-4 md:grid-cols-3">
			{#each pages as page (page.href)}
				<a
					href={page.href}
					class="group border-border bg-card hover:border-accent flex flex-col rounded-lg border p-6 no-underline transition-colors"
				>
					<Icon icon={page.icon} class="text-accent h-8 w-8" />
					<h3 class="mt-4 text-lg font-semibold">{page.title}</h3>
					<p class="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">{page.body}</p>
					<span class="text-accent mt-4 inline-flex items-center gap-1 text-sm font-medium">
						Explore
						<Icon
							icon="lucide:arrow-right"
							class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
						/>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
