<script lang="ts">
	import Icon from '@iconify/svelte';
	import SectionNav from '$lib/components/SectionNav.svelte';
	import AffiliateLink from '$lib/components/AffiliateLink.svelte';

	const sections = [
		{ id: 'design', label: 'The design' },
		{ id: 'why-this-design', label: 'Why this design' },
		{
			id: 'parts',
			label: 'Parts list',
			children: [
				{ id: 'cell-parts', label: 'The cell' },
				{ id: 'power-parts', label: 'Power' },
				{ id: 'consumables', label: 'Consumables and prep' }
			]
		},
		{ id: 'configurations', label: 'Configurations and dose' },
		{ id: 'power', label: 'Power' },
		{ id: 'materials', label: 'Materials and safety' },
		{ id: 'pem', label: 'The advanced track: PEM' },
		{ id: 'status', label: 'Status' }
	];
</script>

<svelte:head>
	<title>Plans & Parts | openH2</title>
	<meta
		name="description"
		content="The open source DIY hydrogen generator: design, parts list, cell configurations, dose, and power."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">Plans &amp; Parts</h1>
	<p class="text-muted-foreground mt-4 max-w-2xl text-lg">
		An open source hydrogen generator you can build from common parts, designed safety-first.
	</p>

	<div class="danger-panel mt-6 max-w-2xl rounded-lg border-2 p-5">
		<div class="flex items-center gap-3">
			<Icon icon="lucide:triangle-alert" class="danger-mark h-6 w-6 shrink-0" />
			<h2 class="danger-mark text-lg font-bold tracking-tight">Read before building</h2>
		</div>
		<p class="mt-3 font-medium">
			Hydrogen is flammable and sodium hydroxide is caustic. Never use table salt as an electrolyte
			(it makes chlorine gas), and never drink the water from an electrolyte cell. Read the
			<a href="/safety" class="link">full safety documentation</a> before you build or operate any
			of this. Everything here is at your own risk; see the
			<a href="/disclaimer" class="link">disclaimer</a>.
		</p>
	</div>

	<div class="mt-12 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-12">
		<SectionNav {sections} />

		<div class="space-y-14 lg:max-w-2xl">
			<div>
				<h2 id="design" class="text-2xl font-semibold tracking-tight">The design</h2>
				<p class="text-muted-foreground mt-3">
					The DIY build is a membraneless alkaline electrolysis cell in a one-pint mason jar. Pure
					nickel electrodes sit in a 4 percent solution of food-grade sodium hydroxide in distilled
					water. An inner collection bell, open at the bottom, captures the hydrogen rising off the
					cathode while oxygen escapes around it and vents separately. The gas then passes through a
					bubbler, which scrubs caustic aerosol out of the stream, before reaching a nasal cannula.
					What you do with the gas is up to you. The design choices here, the collection bell and
					the bubbler in particular, are aimed at making it clean enough to breathe.
				</p>
			</div>

			<div>
				<h2 id="why-this-design" class="text-2xl font-semibold tracking-tight">Why this design</h2>
				<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
					<li>
						<span class="text-foreground font-medium">It physically cannot build pressure.</span>
						The collection bell is open at the bottom and the oxygen port is open to atmosphere, so the
						most pressure the cell can ever hold is a few centimeters of water column. Block the output
						and the gas pushes the liquid level down until the cathode is no longer submerged, and electrolysis
						simply stops. For a flammable gas, a cell that switches itself off instead of building pressure
						is a genuine safety property, not a limitation.
					</li>
					<li>
						<span class="text-foreground font-medium">Validated materials.</span> Pure nickel plus food-grade
						sodium hydroxide in distilled water is the tested safe pairing. In extended use the electrolyte
						stays water-clear with no sludge and no electrode breakdown.
					</li>
					<li>
						<span class="text-foreground font-medium">Cheap, common parts.</span> A mason jar, nickel
						strip, an ordinary regulated wall adapter, and aquarium-grade plumbing.
					</li>
					<li>
						<span class="text-foreground font-medium">Breathing, not drinking.</span> Bubbling hydrogen
						through water does dissolve it, so hydrogen water is not off the table in principle, but at
						this output it is slow and capped at what water holds at atmospheric pressure. More to the
						point, gas off an alkaline cell is the wrong source for anything you intend to drink. That
						job belongs to a PEM system running on pure water (see the advanced track below).
					</li>
				</ul>
			</div>

			<div>
				<h2 id="parts" class="text-2xl font-semibold tracking-tight">Parts list</h2>
				<p class="text-muted-foreground mt-3">
					This is version one of the bill of materials, as built on my bench. Where a part is not
					yet linked, it is because I am still pinning down the exact spec I want to recommend
					rather than because it is hard to find.
				</p>

				<p class="text-muted-foreground border-border mt-4 border-l-2 pl-4 text-sm">
					Links marked Amazon are affiliate links, which cost you nothing extra. As an Amazon
					Associate I earn from qualifying purchases. The parts listed are the ones I actually use.
				</p>

				<h3 id="cell-parts" class="text-foreground mt-8 text-lg font-semibold">The cell</h3>
				<div class="mt-3 overflow-x-auto">
					<table class="border-border w-full min-w-[560px] border-collapse text-sm">
						<thead>
							<tr class="border-border border-b text-left">
								<th class="py-2 pr-4 font-semibold">Part</th>
								<th class="py-2 pr-4 font-semibold">Qty</th>
								<th class="py-2 font-semibold">What I use</th>
							</tr>
						</thead>
						<tbody class="text-muted-foreground">
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Outer jar</td>
								<td class="py-2 pr-4">1</td>
								<td class="py-2">
									A wide-mouth mason jar. Either shape works, and quart jars do too.
									<ul class="mt-2 space-y-1">
										<li>
											<AffiliateLink href="https://amzn.to/4h0VNtD">
												Short 16 oz (1 pint), what I use
											</AffiliateLink>
										</li>
										<li>
											<AffiliateLink href="https://amzn.to/3SrtVWi">
												Standard taller 16 oz (1 pint)
											</AffiliateLink>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Inner bell</td>
								<td class="py-2 pr-4">1</td>
								<td class="py-2">
									A 30 mm glass test tube with the bottom cut off and fire-polished. It hangs open
									at the bottom so hydrogen collects in the top.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Silicone jar lid</td>
								<td class="py-2 pr-4">1</td>
								<td class="py-2">
									A solid silicone seal used with the standard mason ring. A full silicone top that
									replaces the ring also works.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Silicone bell cap</td>
								<td class="py-2 pr-4">1</td>
								<td class="py-2">
									Sized to the 30 mm tube. It seals the top of the bell, and the hydrogen outlet
									passes through it.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Stainless steel tubes</td>
								<td class="py-2 pr-4">2</td>
								<td class="py-2">
									These pass through the lids and carry the gas out: oxygen through the jar lid,
									hydrogen through the bell cap. They are also the electrical conductors (see
									below).
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Pure nickel tape</td>
								<td class="py-2 pr-4">2</td>
								<td class="py-2">
									24 inch strips, roughened thoroughly on both sides with sandpaper. It must be pure
									nickel, never plated. See the
									<a href="/safety#electrodes" class="link">electrodes section</a>.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Clamps</td>
								<td class="py-2 pr-4">2</td>
								<td class="py-2">
									They clamp the power terminals onto the stainless tubes above the lids.
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="border-border bg-card/60 mt-6 rounded-lg border p-4">
					<p class="text-foreground text-sm font-medium">
						The trick: the stainless tubes are also the busbars
					</p>
					<p class="text-muted-foreground mt-2 text-sm">
						Each stainless tube does three jobs at once. It is the gas outlet, the lid penetration,
						and the current conductor. The nickel tape attaches to the tube below the lid but above
						the electrolyte line, and the power clamp grips the same tube above the lid. No wire
						ever enters the jar, so there is no separate electrical feedthrough and no extra hole to
						seal.
					</p>
				</div>

				<h3 id="power-parts" class="text-foreground mt-8 text-lg font-semibold">Power</h3>
				<div class="mt-3 overflow-x-auto">
					<table class="border-border w-full min-w-[560px] border-collapse text-sm">
						<thead>
							<tr class="border-border border-b text-left">
								<th class="py-2 pr-4 font-semibold">Part</th>
								<th class="py-2 pr-4 font-semibold">Qty</th>
								<th class="py-2 font-semibold">What I use</th>
							</tr>
						</thead>
						<tbody class="text-muted-foreground">
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">Wires</td>
								<td class="py-2 pr-4">2</td>
								<td class="py-2">
									Spade terminal on one end for the clamp, the other end going to the power source.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="text-foreground py-2 pr-4 font-medium">USB-C PD trigger board</td>
								<td class="py-2 pr-4">1</td>
								<td class="py-2">
									Sets the cell voltage from any USB-C charger or power bank, which is what makes a
									cordless single-cell build possible. A regulated wall adapter at the right voltage
									works just as well.
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3 id="consumables" class="text-foreground mt-8 text-lg font-semibold">
					Consumables and prep
				</h3>
				<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
					<li>
						<span class="text-foreground font-medium">Sandpaper</span>, for roughening the nickel
						tape. Do both sides and do it thoroughly: more active area means more output per amp.
					</li>
					<li>
						<span class="text-foreground font-medium">Food-grade sodium hydroxide</span> and
						<span class="text-foreground font-medium">distilled water</span>, mixed to 4 percent.
						Read the <a href="/safety#lye" class="link">lye handling section</a> before you open the container.
					</li>
					<li>
						<span class="text-foreground font-medium">A USB-C charger or power bank</span> and cable,
						as the actual power source behind the trigger board.
					</li>
					<li>
						<span class="text-foreground font-medium">A bubbler</span> in the hydrogen line before
						the cannula. This is not optional. It is what strips caustic aerosol out of the gas you
						breathe, and it is covered on the <a href="/safety" class="link">safety page</a>.
					</li>
				</ul>

				<p class="text-muted-foreground mt-6 text-sm">
					Still being specified: the stainless tube diameter, wall, and length; the clamp type and
					size; wire gauge; which PD trigger board to recommend; and the nickel tape width and
					thickness. Those land here with links as I settle them.
				</p>
			</div>

			<div>
				<h2 id="configurations" class="text-2xl font-semibold tracking-tight">
					Configurations and dose
				</h2>
				<p class="text-muted-foreground mt-3">
					Output follows Faraday's law: about 7.6 mL of hydrogen per minute per amp, per cell. More
					cells in series means more gas at the same current. Sustained inspired concentration
					depends on how you breathe (the ranges below span normal to slow breathing).
				</p>
				<div class="mt-4 overflow-x-auto">
					<table class="border-border w-full min-w-[560px] border-collapse text-sm">
						<thead>
							<tr class="border-border border-b text-left">
								<th class="py-2 pr-4 font-semibold">Setup</th>
								<th class="py-2 pr-4 font-semibold">Current</th>
								<th class="py-2 pr-4 font-semibold">Production</th>
								<th class="py-2 pr-4 font-semibold">Sustained inspired</th>
								<th class="py-2 font-semibold">Supply</th>
							</tr>
						</thead>
						<tbody class="text-muted-foreground">
							<tr class="border-border border-b">
								<td class="py-2 pr-4">1 cell (baseline)</td>
								<td class="py-2 pr-4">~3 A</td>
								<td class="py-2 pr-4">~23 mL/min</td>
								<td class="py-2 pr-4">0.4 to 1%: gentle low-dose</td>
								<td class="py-2">~7.5 V, 3 A</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">2 cells in series</td>
								<td class="py-2 pr-4">3 A</td>
								<td class="py-2 pr-4">~46 mL/min</td>
								<td class="py-2 pr-4">0.8 to 1.5%: clinical floor</td>
								<td class="py-2">~12 to 15 V, 3 A</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">3 cells in series</td>
								<td class="py-2 pr-4">3 A</td>
								<td class="py-2 pr-4">~69 mL/min</td>
								<td class="py-2 pr-4">1.1 to 2.3%: clinical range</td>
								<td class="py-2">~18 to 22 V, 3 A</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-muted-foreground mt-3 text-sm">
					Clinical inhalation studies typically use 1 to 4 percent. A single cell is deliberately
					gentle; series stacking is the clean path to the studied range, and it spreads the heat
					across cells too.
				</p>
			</div>

			<div>
				<h2 id="power" class="text-2xl font-semibold tracking-tight">Power</h2>
				<p class="text-muted-foreground mt-3">
					The cell is constant-voltage stable: hold a fixed regulated voltage and the current
					settles on its own and stays put for hours. No constant-current electronics required. A
					certified, regulated 12 V / 2 A wall adapter runs the standard two-cell stack; a single
					cell runs happily from 5 to 9 volts, which opens the door to USB power and a cordless
					build off a power bank. Two rules: use a certified adapter, and use an accurately
					regulated one, since an unregulated wall wart that floats high will run the cell hot.
				</p>
			</div>

			<div>
				<h2 id="materials" class="text-2xl font-semibold tracking-tight">
					Materials, purity, and safety
				</h2>
				<p class="text-muted-foreground mt-3">
					Which electrodes and electrolytes are safe, why table salt and stainless anodes are
					dangerous, how to strip caustic mist out of the breathing stream, and the roughly $40 of
					gear that lets you prove your own unit is clean before you breathe it: all of that lives
					on the <a href="/safety" class="link">safety page</a>, which covers the DIY alkaline build
					and PEM systems separately because their hazards genuinely differ.
				</p>
				<p class="text-muted-foreground mt-3">
					The short version for this build: pure nickel electrodes with 4 percent food-grade sodium
					hydroxide in distilled water is the validated pairing, and departing from it is how DIY
					electrolysis goes wrong. Read the
					<a href="/safety" class="link">full guidance</a> before sourcing anything.
				</p>
			</div>

			<div>
				<h2 id="pem" class="text-2xl font-semibold tracking-tight">The advanced track: PEM</h2>
				<p class="text-muted-foreground mt-3">
					Proton exchange membrane cells are the upgrade path: sealed solid-state cells running on
					pure water with no caustic electrolyte, producing separated, high-purity gas that can be
					pressurized. Pressure is what makes hydrogen water practical rather than merely possible:
					it reaches saturation quickly instead of over hours. They cost more and demand real
					electronics (constant-current drive, thermal protection, water management). Their hazards
					are different enough from the alkaline build that they get their own section on the
					<a href="/safety#pem" class="link">safety page</a>: driving a PEM cell the way you drive
					this one destroys it. I am bench-testing PEM hardware now and publishing the results as I
					go; follow along on the
					<a href="/research#pem-electrolyzers" class="link">Research</a> page.
				</p>
			</div>

			<div>
				<h2 id="status" class="text-2xl font-semibold tracking-tight">Status</h2>
				<p class="text-muted-foreground mt-3">
					The parts list above is published and current. Step-by-step build instructions are next,
					as a video series, with the <a href="/safety" class="link">safety documentation</a> as the
					publishing gate. Prefer not to source everything yourself? See
					<a href="/plans-and-parts/kits" class="link">Kits</a>
					and
					<a href="/plans-and-parts/prebuilt-machines" class="link">Prebuilt Machines</a>.
				</p>
			</div>
		</div>
	</div>
</section>
