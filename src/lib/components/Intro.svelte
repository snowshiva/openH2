<script lang="ts">
	import Icon from '@iconify/svelte';

	const points = [
		{
			icon: 'lucide:trending-up',
			title: 'A molecule on the rise',
			body: 'Hydrogen-rich water and low-dose hydrogen gas inhalation have grown from a niche curiosity into one of the fastest growing corners of the supplement world, backed by a rapidly expanding body of research.',
			link: { href: '/health-and-h2', label: 'Health & H₂' }
		},
		{
			icon: 'lucide:zap',
			title: 'Beautifully simple chemistry',
			body: 'Electrolysis is one of the simplest reactions there is: pass a current through water and it splits into hydrogen and oxygen. No exotic equipment, no black boxes.',
			link: { href: '/research', label: 'Research' }
		},
		{
			icon: 'lucide:coins',
			title: 'Affordable to make yourself',
			body: 'A simple DIY electrolysis cell can be built from inexpensive, easy-to-find parts and a modest power supply. When you want more output and convenience, a PEM cell is the advanced upgrade, more expensive but still a fraction of the price of commercial machines.',
			link: { href: '/plans-and-parts', label: 'Plans & Parts' }
		},
		{
			icon: 'lucide:shield-check',
			title: 'Safety and purity matter',
			body: 'The wrong electrolyte or electrode material can put chlorine gas or other toxic byproducts into the hydrogen you make, and hydrogen itself demands respect as a flammable gas. One rule above all: never drink the water from an electrolyte cell. Hydrogen water is only viable with pure water and a PEM membrane; DIY electrolyte cells are for making gas.',
			link: { href: '/plans-and-parts', label: 'Build it right' }
		}
	];
</script>

<section class="mx-auto max-w-5xl px-4">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-2xl font-bold tracking-tight md:text-3xl">
			Why hydrogen, and why make it yourself?
		</h2>
		<p class="text-muted-foreground mt-4">
			Molecular hydrogen is having a moment as an educational experiment and as a health supplement.
			The technology behind it is simple enough for anyone to own. openH2 exists to share what
			works:
			<a href="/research" class="link">the science</a>,
			<a href="/plans-and-parts" class="link">the hardware</a>, and the safety knowledge to do it
			right.
		</p>
	</div>
	<div class="mt-10 grid gap-4 md:grid-cols-2">
		{#each points as point (point.title)}
			<div class="border-border bg-card flex flex-col rounded-lg border p-6">
				<div class="flex items-center gap-3">
					<Icon icon={point.icon} class="text-accent h-6 w-6 shrink-0" />
					<h3 class="font-semibold">{point.title}</h3>
				</div>
				<p class="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">{point.body}</p>
				<a
					href={point.link.href}
					class="text-accent mt-3 inline-flex items-center gap-1 text-sm font-medium no-underline hover:underline"
				>
					{point.link.label}
					<Icon icon="lucide:arrow-right" class="h-4 w-4" />
				</a>
			</div>
		{/each}
	</div>
</section>
