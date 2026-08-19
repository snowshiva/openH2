<svelte:head>
	<title>Plans & Parts | openH2</title>
	<meta
		name="description"
		content="The open source DIY hydrogen generator: design, configurations, power, materials safety, and how to verify your build."
	/>
</svelte:head>

<section class="mx-auto max-w-3xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">Plans &amp; Parts</h1>
	<p class="text-muted-foreground mt-4 text-lg">
		An open source hydrogen generator you can build from common parts, designed safety-first and
		documented honestly.
	</p>

	<div class="border-border bg-muted mt-6 rounded-lg border p-4 text-sm">
		<p class="text-foreground font-medium">Read before building</p>
		<p class="text-muted-foreground mt-1">
			Hydrogen is flammable and sodium hydroxide is caustic. Never use table salt as an electrolyte
			(it makes chlorine gas), never drink the water from an electrolyte cell, and never build or
			operate this equipment without reading the full safety documentation that ships with the
			plans. Everything here is at your own risk; see the
			<a href="/disclaimer" class="link">disclaimer</a>.
		</p>
	</div>

	<div class="mt-12 space-y-12">
		<div>
			<h2 class="text-2xl font-semibold tracking-tight">The design</h2>
			<p class="text-muted-foreground mt-3">
				The DIY build is a membraneless alkaline electrolysis cell in a one-pint mason jar. Pure
				nickel electrodes sit in a 4 percent solution of food-grade sodium hydroxide in distilled
				water. An inner collection bell, open at the bottom, captures the hydrogen rising off the
				cathode while oxygen escapes around it and vents separately. The gas then passes through a
				de-misting train (a water bubbler, a coalescing demister, and a medical-grade hydrophobic
				breathing filter) before reaching a nasal cannula. It is an inhalation device only.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Why this design</h2>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">It physically cannot build pressure.</span>
					The collection bell is open at the bottom, so the most pressure the cell can ever hold is a
					few centimeters of water column. Block the output and it simply burps and vents. For a flammable
					gas, that inherent self-relief is a genuine safety property, not a limitation.
				</li>
				<li>
					<span class="text-foreground font-medium">Validated materials.</span> Pure nickel plus food-grade
					sodium hydroxide in distilled water is the tested safe pairing. In extended use the electrolyte
					stays water-clear with no sludge and no electrode breakdown.
				</li>
				<li>
					<span class="text-foreground font-medium">Cheap, common parts.</span> A mason jar, nickel strip,
					an ordinary regulated wall adapter, and aquarium-grade plumbing.
				</li>
				<li>
					<span class="text-foreground font-medium">A clean boundary.</span> This cell makes hydrogen
					gas for inhalation. Making hydrogen water requires a sealed, pressurizable vessel and pure water,
					which is PEM territory (see the advanced track below).
				</li>
			</ul>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Configurations and dose</h2>
			<p class="text-muted-foreground mt-3">
				Output follows Faraday's law: about 7.6 mL of hydrogen per minute per amp, per cell. More
				cells in series means more gas at the same current. Sustained inspired concentration depends
				on how you breathe (the ranges below span normal to slow breathing).
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
			<h2 class="text-2xl font-semibold tracking-tight">Power</h2>
			<p class="text-muted-foreground mt-3">
				The cell is constant-voltage stable: hold a fixed regulated voltage and the current settles
				on its own and stays put for hours. No constant-current electronics required. A certified,
				regulated 12 V / 2 A wall adapter runs the standard two-cell stack; a single cell runs
				happily from 5 to 9 volts, which opens the door to USB power and a cordless build off a
				power bank. Two rules: use a certified adapter, and use an accurately regulated one, since
				an unregulated wall wart that floats high will run the cell hot.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Materials: the golden combination</h2>
			<p class="text-muted-foreground mt-3">
				Pure nickel electrodes plus 4 percent food-grade sodium hydroxide in distilled water is the
				validated safe pairing for this design. Deviating from it is how DIY electrolysis goes
				wrong:
			</p>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">Never table salt.</span> Salt water electrolysis produces
					chlorine gas and hypochlorite. This is the most common beginner mistake and the most dangerous
					one.
				</li>
				<li>
					<span class="text-foreground font-medium">Never stainless steel as the anode.</span>
					Under anodic polarization in alkali, chromium can leach as hexavalent chromium, which is toxic.
				</li>
				<li>
					<span class="text-foreground font-medium"
						>Never copper, brass, zinc, galvanized steel, or aluminum</span
					> anywhere in contact with the electrolyte. They corrode, contaminate, or react outright.
				</li>
				<li>
					<span class="text-foreground font-medium">Verify your nickel is solid nickel.</span>
					Much of the "nickel strip" sold for battery welding is nickel-plated steel. A strong magnet
					grabs plated steel hard and pure nickel only weakly.
				</li>
			</ul>
			<p class="text-muted-foreground mt-3">
				The full electrode and electrolyte danger matrix, with the reasoning for every row, is a
				flagship part of the published plans.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Verify your build</h2>
			<p class="text-muted-foreground mt-3">
				Every builder can prove their own unit is clean before inhaling anything, with about $40 of
				gear:
			</p>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">Oxygen meter at the outlet.</span> A good bell reads
					under 1 percent oxygen. Treat 2 to 3 percent as an alarm that separation is degrading.
				</li>
				<li>
					<span class="text-foreground font-medium">pH paper at the mouthpiece.</span>
					Neutral means clean. Alkaline means caustic mist is getting through and the de-misting train
					needs attention.
				</li>
				<li>
					<span class="text-foreground font-medium">The flame test.</span> A soft "whump" and a near-invisible
					pale blue flame is the target. A sharp pop means the gases are mixing (stop and check). An orange
					flame is sodium, a live visual readout of caustic mist that should not be there.
				</li>
			</ul>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">The advanced track: PEM</h2>
			<p class="text-muted-foreground mt-3">
				Proton exchange membrane cells are the upgrade path: sealed solid-state cells running on
				pure water with no caustic electrolyte, producing separated, high-purity gas that can be
				pressurized, which also makes real hydrogen water possible. They cost more and demand real
				electronics (constant-current drive, thermal protection, water management). We are
				bench-testing PEM hardware now and publishing the results as we go; follow along on the
				<a href="/research" class="link">Research</a>
				page.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Status</h2>
			<p class="text-muted-foreground mt-3">
				The complete bill of materials and step-by-step build instructions are being prepared for
				publication, with the safety documentation as the publishing gate. Prefer not to source
				everything yourself? See
				<a href="/plans-and-parts/kits" class="link">Kits</a>
				and
				<a href="/plans-and-parts/prebuilt-machines" class="link">Prebuilt Machines</a>.
			</p>
		</div>
	</div>
</section>
