export type NavLink = { href: string; label: string; children?: NavLink[] };

export const links: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/research', label: 'Research' },
	{
		href: '/plans-and-parts',
		label: 'Plans & Parts',
		children: [
			{ href: '/plans-and-parts/kits', label: 'Kits' },
			{ href: '/plans-and-parts/prebuilt-machines', label: 'Prebuilt Machines' }
		]
	},
	{ href: '/health-and-h2', label: 'Health & H₂' },
	{ href: '/about', label: 'About' }
];
