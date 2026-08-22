<svelte:head>
	<title>Plans & Parts | openH2</title>
	<meta
		name="description"
		content="The open source DIY hydrogen generator: design, cell configurations, dose, and power."
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
			(it makes chlorine gas), and never drink the water from an electrolyte cell. Read the
			<a href="/safety" class="link">full safety documentation</a> before you build or operate any
			of this. Everything here is at your own risk; see the
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
				bubbler, which scrubs caustic aerosol out of the stream, before reaching a nasal cannula. It
				is an inhalation device only.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Why this design</h2>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">It physically cannot build pressure.</span>
					The collection bell is open at the bottom, so the most pressure the cell can ever hold is a
					few centimeters of water column. Block the output and the gas pushes the liquid level down until
					the cathode is no longer submerged, and electrolysis simply stops. For a flammable gas, a cell
					that switches itself off instead of building pressure is a genuine safety property, not a limitation.
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
					<span class="text-foreground font-medium">Built for inhalation.</span> Bubbling hydrogen through
					water does dissolve it, so hydrogen water is not off the table in principle, but at this output
					it is slow and capped at what water holds at atmospheric pressure. More to the point, gas off
					an alkaline cell is the wrong source for anything you intend to drink. That job belongs to a
					PEM system running on pure water (see the advanced track below).
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
			<h2 class="text-2xl font-semibold tracking-tight">Materials, purity, and safety</h2>
			<p class="text-muted-foreground mt-3">
				Which electrodes and electrolytes are safe, why table salt and stainless anodes are
				dangerous, how to strip caustic mist out of the breathing stream, and the roughly $40 of
				gear that lets you prove your own unit is clean before you breathe it: all of that lives on
				the <a href="/safety" class="link">safety page</a>, which covers the DIY alkaline build and
				PEM systems separately because their hazards genuinely differ.
			</p>
			<p class="text-muted-foreground mt-3">
				The short version for this build: pure nickel electrodes with 4 percent food-grade sodium
				hydroxide in distilled water is the validated pairing, and departing from it is how DIY
				electrolysis goes wrong. Read the
				<a href="/safety" class="link">full guidance</a> before sourcing anything.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">The advanced track: PEM</h2>
			<p class="text-muted-foreground mt-3">
				Proton exchange membrane cells are the upgrade path: sealed solid-state cells running on
				pure water with no caustic electrolyte, producing separated, high-purity gas that can be
				pressurized. Pressure is what makes hydrogen water practical rather than merely possible: it
				reaches saturation quickly instead of over hours. They cost more and demand real electronics
				(constant-current drive, thermal protection, water management). Their hazards are different
				enough from the alkaline build that they get their own section on the
				<a href="/safety" class="link">safety page</a>: driving a PEM cell the way you drive this
				one destroys it. I am bench-testing PEM hardware now and publishing the results as I go;
				follow along on the <a href="/research" class="link">Research</a> page.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Status</h2>
			<p class="text-muted-foreground mt-3">
				The complete bill of materials and step-by-step build instructions are being prepared for
				publication, with the <a href="/safety" class="link">safety documentation</a> as the
				publishing gate. Prefer not to source everything yourself? See
				<a href="/plans-and-parts/kits" class="link">Kits</a>
				and
				<a href="/plans-and-parts/prebuilt-machines" class="link">Prebuilt Machines</a>.
			</p>
		</div>
	</div>
</section>
