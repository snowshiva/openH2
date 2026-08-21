<svelte:head>
	<title>Safety | openH2</title>
	<meta
		name="description"
		content="Hydrogen safety for DIY alkaline cells and PEM systems: flammability, caustic electrolyte, gas purity, materials, and the hazards unique to each system."
	/>
</svelte:head>

<section class="mx-auto max-w-3xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">Safety</h1>
	<p class="text-muted-foreground mt-4 text-lg">
		Because these designs are open and people build them at home, safety documentation is a core
		deliverable here, not a disclaimer at the bottom of a page. Every hazard below is written as
		what it is, why it matters, and what to do about it.
	</p>

	<div class="border-border bg-muted mt-6 rounded-lg border p-4">
		<p class="text-foreground font-medium">The two systems are not interchangeable</p>
		<p class="text-muted-foreground mt-1 text-sm">
			DIY alkaline cells and PEM systems have genuinely different hazard profiles, and a mitigation
			that keeps one safe can be actively dangerous on the other. The clearest example: the alkaline
			cell is stable on a constant-voltage supply, while feeding a PEM cell the same way destroys
			it. Read the section that matches your hardware, and do not assume anything carries across.
		</p>
	</div>

	<div class="mt-12 space-y-12">
		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Hydrogen itself: true of every system</h2>
			<p class="text-muted-foreground mt-3">
				Hydrogen is flammable across an exceptionally wide range, roughly 4 to 75 percent in air,
				and it ignites from a spark far too small to feel. It burns with a nearly invisible flame,
				it has no color or smell, and being the lightest gas it rises and collects against ceilings
				and inside enclosed spaces.
			</p>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>Run these systems in a ventilated space. Never in a small sealed room.</li>
				<li>
					Keep every ignition source away from the gas path: flames, sparks, switches, static. Keep
					electronics and switching well away from the gas outlet.
				</li>
				<li>
					Never store accumulated gas. These designs make hydrogen for immediate use, and collected
					volumes should stay small.
				</li>
				<li>
					Keep the equipment away from children and pets, and do not leave a running cell unattended
					beyond its documented limits.
				</li>
			</ul>
			<p class="text-muted-foreground mt-3">
				<span class="text-foreground font-medium">Hypoxia is the one that surprises people.</span>
				Breathing dilute hydrogen mixed into room air barely changes your oxygen intake. But a lungful
				drawn from a reservoir of near-pure hydrogen contains no oxygen at all. Never hyperventilate and
				then breath-hold on concentrated hydrogen: that combination can cause blackout by the same mechanism
				that drowns experienced free divers, and here the gas is flammable as well. Stop immediately if
				you feel light-headed.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">DIY alkaline cells</h2>
			<p class="text-muted-foreground mt-3">
				The open source build: a membraneless cell in a mason jar, pure nickel electrodes, 4 percent
				sodium hydroxide in distilled water, an inverted collection bell, and a de-misting train
				feeding a nasal cannula. Inhalation only.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Caustic mist is the main inhalation hazard
			</h3>
			<p class="text-muted-foreground mt-2">
				Electrolysis can carry a fine sodium hydroxide aerosol along with the gas, and inhaling
				caustic mist burns the airway. This is the single most important point for an alkaline
				generator and the easiest one to miss. The de-misting train is mandatory, and every stage is
				deliberately low resistance so it cannot push back against the open bell:
			</p>
			<ol class="text-muted-foreground mt-2 list-decimal space-y-2 pl-6">
				<li>
					A bubbler filled with distilled water, where the gas expands and droplets fall back out.
					Treat the water as a consumable: it collects caustic over time and a saturated bubbler
					starts re-aerosolizing what it caught, so change it once it reaches around pH 9 to 10.
				</li>
				<li>
					A coalescing demister, a plug of PTFE or polypropylene mesh in a wide tube. Never glass
					wool in a breathing line, since it sheds fibers.
				</li>
				<li>
					A medical hydrophobic breathing filter last, which blocks liquid aerosol absolutely and
					adds bacterial and viral filtration.
				</li>
			</ol>
			<p class="text-muted-foreground mt-2">
				Remove aerosol, not humidity. After scrubbing, the gas is fully humidified and that is
				desirable, since dry gas is harsh on airways. Do not add fine diffuser stones or tall packed
				columns: their backpressure would push the bell down and vent gas at the rim.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">Handling sodium hydroxide</h3>
			<p class="text-muted-foreground mt-2">
				The electrolyte is a strong base that causes chemical burns and severe eye damage. Wear
				gloves and eye protection whenever mixing, filling, emptying, or servicing. Always add the
				hydroxide to the water, slowly, and never the reverse, because mixing releases heat. Store
				it sealed, labeled, and out of reach. Keep skin away from a running cell.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Materials: the combinations that poison your gas
			</h3>
			<p class="text-muted-foreground mt-2">
				Pure nickel electrodes with 4 percent food-grade sodium hydroxide in distilled water is the
				validated pairing. Departing from it is how DIY electrolysis turns toxic.
			</p>
			<div class="mt-4 overflow-x-auto">
				<table class="border-border w-full min-w-[520px] border-collapse text-sm">
					<thead>
						<tr class="border-border border-b text-left">
							<th class="py-2 pr-4 font-semibold">Material</th>
							<th class="py-2 pr-4 font-semibold">Verdict</th>
							<th class="py-2 font-semibold">Why</th>
						</tr>
					</thead>
					<tbody class="text-muted-foreground">
						<tr class="border-border border-b">
							<td class="py-2 pr-4">Pure nickel electrodes</td>
							<td class="text-foreground py-2 pr-4 font-medium">Use</td>
							<td class="py-2">Stable in alkali. Electrolyte stays clear with no sludge.</td>
						</tr>
						<tr class="border-border border-b">
							<td class="py-2 pr-4">Stainless steel as anode</td>
							<td class="py-2 pr-4">Avoid</td>
							<td class="py-2">Chromium can leach as hexavalent chromium, which is toxic.</td>
						</tr>
						<tr class="border-border border-b">
							<td class="py-2 pr-4">Copper, brass, zinc, galvanized</td>
							<td class="py-2 pr-4">Never</td>
							<td class="py-2">Corrode and leach toxic metals into gas and electrolyte.</td>
						</tr>
						<tr class="border-border border-b">
							<td class="py-2 pr-4">Aluminum</td>
							<td class="py-2 pr-4">Never</td>
							<td class="py-2">Reacts violently with sodium hydroxide.</td>
						</tr>
						<tr class="border-border border-b">
							<td class="py-2 pr-4">Table salt as electrolyte</td>
							<td class="py-2 pr-4">Never</td>
							<td class="py-2">
								Produces chlorine gas and hypochlorite. The most common beginner mistake and the
								most dangerous one.
							</td>
						</tr>
						<tr class="border-border border-b">
							<td class="py-2 pr-4">Acids as electrolyte</td>
							<td class="py-2 pr-4">Never on this design</td>
							<td class="py-2">
								Nickel corrodes in acid, and organic acids oxidize into the breathing gas.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="text-muted-foreground mt-3">
				<span class="text-foreground font-medium">Verify your nickel is solid nickel.</span> Much of the
				strip sold for battery welding is nickel-plated steel, and sanding it exposes a steel core that
				rusts iron oxide into your gas. A strong magnet grabs plated steel hard and pure nickel only weakly.
				In use, a healthy nickel anode darkens to grey under power and returns to bright metal when off,
				which is protective and expected. Black particulate flaking off, cloudy electrolyte, or pitting
				is the opposite and means metal is entering the gas.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				No membrane, so oxygen crossover matters
			</h3>
			<p class="text-muted-foreground mt-2">
				This cell separates gases by geometry rather than a membrane, and a stoichiometric hydrogen
				and oxygen mixture is explosive rather than merely flammable. The reassuring part is that
				the collected stream is deliberately fuel-rich: it takes roughly 6 percent oxygen before the
				gas can carry a flame at all, and a well-seated bell runs under 1 percent. That is a large
				margin, but it is a margin you should measure rather than assume.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				The cell cannot build pressure, so never make it
			</h3>
			<p class="text-muted-foreground mt-2">
				The collection bell is open at the bottom, so the most pressure it can hold is the few
				centimeters of liquid it can displace. Past that, gas escapes around the rim and vents. That
				inherent relief is a real safety property, and it depends entirely on the bell staying open.
				Never seal or pressurize this cell, and never fit valves or restrictors downstream that
				could dead-head the line. It also means this design cannot make hydrogen water, which needs
				a sealed pressurizable vessel. Keep that boundary clean.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Prove your build before you breathe it
			</h3>
			<p class="text-muted-foreground mt-2">
				Roughly $40 of equipment lets any builder verify their own unit:
			</p>
			<ul class="text-muted-foreground mt-2 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">Oxygen meter at the outlet.</span> Under 1 percent
					is a good bell. Treat 2 to 3 percent as an alarm that separation is failing, and stop.
				</li>
				<li>
					<span class="text-foreground font-medium">pH paper at the mouthpiece.</span> Neutral is clean.
					Alkaline means caustic mist is getting through and the de-misting train needs work.
				</li>
				<li>
					<span class="text-foreground font-medium">The flame test.</span> A soft whump with a pale blue,
					nearly invisible flame is the target. A sharp crack means the gases are mixing and you should
					stop. An orange flame is sodium, a free visual readout of the exact caustic mist you must not
					inhale.
				</li>
			</ul>

			<h3 class="text-foreground mt-6 text-lg font-semibold">Electrical</h3>
			<p class="text-muted-foreground mt-2">
				Use a certified mains adapter, never an uncertified supply, and fuse the DC input. The low
				voltage itself is not a shock hazard, but mains faults around a conductive, caustic liquid
				are.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">PEM systems</h2>
			<p class="text-muted-foreground mt-3">
				Sealed solid-state cells running on pure water with no caustic electrolyte. That removes the
				mist and handling hazards entirely and replaces them with a different set, because a PEM
				system can hold real pressure and its gas paths can be closed.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Constant current only, and this is the mistake that destroys cells
			</h3>
			<p class="text-muted-foreground mt-2">
				A PEM cell behaves like a diode. Below roughly 1.5 volts almost nothing flows, and then
				current rises nearly vertically with tiny increases in voltage. On our own bench cell the
				slope worked out to about 26 amps per 100 millivolts. Put a 5 volt USB source across it and
				it will try to draw hundreds of watts through a few square centimeters of membrane until
				something gives.
			</p>
			<p class="text-muted-foreground mt-2">
				It gets worse with heat: a PEM cell needs less voltage as it warms, so at fixed voltage the
				current climbs as it heats, which heats it further. That is textbook thermal runaway, and
				constant-current operation removes the failure mode entirely. Set a current limit first and
				let the cell take whatever voltage it needs, typically 1.5 to 2.2 volts. Never connect a PEM
				cell to a USB charger, a wall adapter, a battery, or any supply with its current knob wide
				open, including the supplies used for the DIY alkaline build.
			</p>
			<p class="text-muted-foreground mt-2">
				A hard voltage ceiling just above normal operating voltage is cheap, passive protection that
				does not depend on firmware. On our bench a 3.5 volt compliance ceiling limited a
				reverse-connected cell to 1.8 amps instead of 5.09, cutting the damage roughly threefold.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Polarity is a gas routing hazard, not just a component one
			</h3>
			<p class="text-muted-foreground mt-2">
				Reversing a PEM cell does not merely risk the catalyst. It sends hydrogen out of the port
				that normally carries oxygen. In a bench incident, 15 minutes of reversed polarity put an
				estimated 571 mL of hydrogen into a reservoir headspace designed to see only oxygen.
				Polarity should be fixed by construction with non-reversible connectors internally, and
				vents should be sized on the assumption they may one day see hydrogen.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				A pressurized hydrogen path must never be a closed one
			</h3>
			<p class="text-muted-foreground mt-2">
				Holding pressure means the gas has somewhere to accumulate, and at these production rates
				that happens quickly: a sealed 100 mL headspace goes from 1 to 8 bar in about 18 minutes.
				Any such system needs a pressure relief valve set below its weakest component, a pressure
				sensor that can throttle or stop the current, and no configuration in which a blocked outlet
				simply builds pressure.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Water carryover and the detonating gas scenario
			</h3>
			<p class="text-muted-foreground mt-2">
				Liquid water comes out of the hydrogen port by design, pulled across the membrane with each
				proton, at roughly 7 to 10 mL per hour on a single cell at 5 amps. That water has to be
				trapped and returned, which creates the system's sharpest hazard: if a drain empties
				completely, hydrogen follows the water into a reservoir headspace that already contains
				oxygen. It takes very little. Ten millilitres of slipped hydrogen in a 200 mL headspace
				reaches 5 percent, which is above the flammability limit.
			</p>
			<p class="text-muted-foreground mt-2">
				Use more than one defense: a liquid seal or U-trap in the drain line, which passively blocks
				gas with no logic to fail; a drain that always stops with liquid remaining rather than
				emptying; a drain that terminates below the reservoir waterline; and generous venting so
				nothing can accumulate even if some slips through.
			</p>

			<h3 class="text-foreground mt-6 text-lg font-semibold">
				Never put anything in the water you would not put in the cell
			</h3>
			<p class="text-muted-foreground mt-2">
				This one comes from an actual bench incident: essential oil added to a bubbler as a scent
				experiment. A user-fillable humidifier must never drain back into the feed water, or a
				pleasant idea becomes a poisoned membrane. Keep the sealed, service-only water trap and the
				user-cleanable humidifier as separate things, and never route scent into a breathing stream.
				Aerosolized oil is the documented cause of lipoid pneumonia, it attacks seals, and it
				injures corneas.
			</p>
			<p class="text-muted-foreground mt-2">
				One more subtlety worth knowing: as a cell cools after shutdown, the contracting gas can
				siphon humidifier water back toward the cell. Raising the hydrogen line into an inverted U
				before it descends solves it passively, with nothing to stick.
			</p>
		</div>

		<div class="border-border border-t pt-8">
			<h2 class="text-2xl font-semibold tracking-tight">Status of this document</h2>
			<p class="text-muted-foreground mt-3">
				This is working safety documentation from an active project, and it is honest about where it
				stands. The materials guidance is validated on our own hardware but has not yet had a formal
				qualified review covering chemical, gas, and electrical safety, and the PEM section
				describes a system still in bench testing. Nothing here has been softened to make a build
				look simpler. Treat it as the beginning of your own diligence rather than the end of it, and
				see the
				<a href="/disclaimer" class="link">full disclaimer</a> for what that means legally.
			</p>
		</div>
	</div>
</section>
