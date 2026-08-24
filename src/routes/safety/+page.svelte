<script lang="ts">
	import Icon from '@iconify/svelte';
	import SectionNav from '$lib/components/SectionNav.svelte';

	const sections = [
		{ id: 'key-points', label: 'Read this first' },
		{ id: 'hydrogen-gas', label: 'Hydrogen gas itself' },
		{ id: 'browns-gas', label: "Brown's gas" },
		{ id: 'ventilation', label: 'Gas volume and ventilation' },
		{ id: 'electrolytes', label: 'Electrolytes' },
		{ id: 'electrodes', label: 'Electrodes' },
		{ id: 'lye', label: 'Sodium hydroxide (lye)' },
		{ id: 'diy-cells', label: 'DIY alkaline cells' },
		{ id: 'pem', label: 'PEM systems' },
		{ id: 'status', label: 'Status of this document' }
	];
</script>

<svelte:head>
	<title>Safety | openH2</title>
	<meta
		name="description"
		content="Hydrogen safety: Brown's gas and why I separate the gases, ventilation, electrolytes, electrodes, lye handling, and the hazards specific to DIY alkaline cells and PEM systems."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">Safety</h1>

	<div class="danger-panel mt-6 max-w-3xl rounded-lg border-2 p-5 md:p-6">
		<div class="flex items-center gap-3">
			<Icon icon="lucide:triangle-alert" class="danger-mark h-7 w-7 shrink-0" />
			<h2 id="key-points" class="danger-mark text-xl font-bold tracking-tight md:text-2xl">
				Read this first
			</h2>
		</div>
		<ul class="danger-list mt-4 list-disc space-y-3 pl-6 font-semibold md:text-lg">
			<li>Never experiment with breathing unknown or untested experimental gases.</li>
			<li>
				Sodium chloride (table salt) in electrolysis creates poisonous chlorine gas. Never breathe
				gas made from sodium chloride electrolyte.
			</li>
			<li>Lye (NaOH soda lye, or KOH potash lye) is caustic and very dangerous.</li>
			<li>
				Hydrogen is flammable and explosive. Mixed with oxygen it is EXTREMELY EXPLOSIVE. That
				mixture carries its own oxygen, so it needs nothing from the air: it will travel up tubes
				and blow apart sealed containers like a bomb. NEVER store them together.
			</li>
		</ul>
	</div>

	<p class="text-muted-foreground mt-8 max-w-2xl text-lg">
		Because these designs are open and people build them at home, safety documentation is a core
		deliverable here, not a disclaimer at the bottom of a page. Every hazard below is written as
		what it is, why it matters, and what to do about it.
	</p>

	<div class="border-border bg-muted mt-6 max-w-2xl rounded-lg border p-4">
		<p class="text-foreground font-medium">The two systems are not interchangeable</p>
		<p class="text-muted-foreground mt-1 text-sm">
			DIY alkaline cells and PEM systems have genuinely different hazard profiles, and a mitigation
			that keeps one safe can be actively dangerous on the other. The clearest example: the alkaline
			cell is stable on a constant-voltage supply, while feeding a PEM cell the same way destroys
			it. Read the section that matches your hardware, and do not assume anything carries across.
		</p>
	</div>

	<div class="mt-12 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start lg:gap-12">
		<SectionNav {sections} />

		<div class="space-y-14 lg:max-w-2xl">
			<div>
				<h2 id="hydrogen-gas" class="text-2xl font-semibold tracking-tight">Hydrogen gas itself</h2>
				<p class="text-muted-foreground mt-3">
					Hydrogen is flammable across an exceptionally wide range, roughly 4 to 75 percent in air,
					and it ignites from a spark far too small to feel. It burns with a nearly invisible flame,
					it has no color or smell, and being the lightest gas it rises and collects against
					ceilings and inside enclosed spaces.
				</p>
				<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
					<li>Run these systems in a ventilated space. Never in a small sealed room.</li>
					<li>
						Keep every ignition source away from the gas path: flames, sparks, switches, static.
						Keep electronics and switching well away from the gas outlet.
					</li>
					<li>
						Never store accumulated gas. These designs make hydrogen for immediate use, and
						collected volumes should stay small.
					</li>
					<li>
						Keep the equipment away from children and pets, and do not leave a running cell
						unattended beyond its documented limits.
					</li>
				</ul>
				<p class="text-muted-foreground mt-3">
					<span class="text-foreground font-medium">Hypoxia is the one that surprises people.</span>
					Breathing dilute hydrogen mixed into room air barely changes your oxygen intake. But a lungful
					drawn from a reservoir of near-pure hydrogen contains no oxygen at all. Never hyperventilate
					and then breath-hold on concentrated hydrogen: that combination can cause blackout by the same
					mechanism that drowns experienced free divers, and here the gas is flammable as well. Stop immediately
					if you feel light-headed.
				</p>
			</div>

			<div>
				<h2 id="browns-gas" class="text-2xl font-semibold tracking-tight">
					Brown's gas, and why I separate the gases
				</h2>
				<p class="text-muted-foreground mt-3">
					Split water and you get hydrogen and oxygen in exactly two-to-one proportion, because that
					is the proportion they were in when they were water. Collect that raw mixture without
					separating it and you have Brown's gas, also sold as oxyhydrogen or HHO. It is the single
					most dangerous thing an electrolysis cell can produce, and the reason this project
					separates the two gases at the source.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Why the perfect ratio is the problem
				</h3>
				<p class="text-muted-foreground mt-2">
					Ordinary fuels are dangerous only once they find air. Propane leaking from a tank is inert
					until it mixes into the right proportion with oxygen, and most of any leak never reaches
					that window. Brown's gas skips that step entirely. The fuel and the oxidizer are already
					mixed, at the molecular scale, in the exact ratio for complete reaction with nothing left
					over. There is no lean part of the cloud and no rich part. All of it can burn, all at
					once.
				</p>
				<p class="text-muted-foreground mt-2">
					And it very much wants to. Hydrogen and oxygen sitting together are in a high-energy
					state, and water is the low-energy state they fall into, releasing roughly 286 kilojoules
					for every mole of hydrogen. The mixture is not stable so much as
					<em>waiting</em>. The only thing holding it back is a small activation barrier, and
					hydrogen's is famously low: about 0.02 millijoules will do it, roughly fifteen times less
					energy than propane or natural gas needs. A static shock you can actually feel carries
					hundreds of times more energy than that. A shock you cannot feel is still plenty.
				</p>
				<p class="text-muted-foreground mt-2">
					Once lit, there is no delay for mixing, so the flame front tears through the volume at
					roughly an order of magnitude the speed of a hydrocarbon flame, and in any kind of
					confinement it can accelerate into a detonation travelling at kilometres per second.
					Practically speaking the entire volume reacts at once. It is not a fire that spreads, it
					is a pressure event. A jar of it is not flammable, it is an explosive charge with a hair
					trigger.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Hydrogen alone is dangerous, but ordinarily dangerous
				</h3>
				<p class="text-muted-foreground mt-2">
					Separated hydrogen deserves real respect and gets it throughout this page, but it belongs
					in a different category. Like propane or natural gas, it has to find air and mix before it
					can do anything, which means a release has to accumulate and then meet an ignition source.
					Two of its properties are worse than propane's: the flammable range is far wider (4 to 75
					percent, against roughly 2 to 10) and it lights far more easily. One is better: it is the
					lightest substance there is, so instead of pooling at floor level the way propane does, it
					rises and disperses quickly given anywhere to go. That is why ventilation matters so much,
					and why it works so well.
				</p>
				<p class="text-muted-foreground mt-2">
					The dangerous case for hydrogen alone is the same one as for any fuel gas: a leak into a
					confined space, left to premix. Hydrogen in air can detonate rather than merely burn
					between roughly 18 and 59 percent, which a trapped leak can reach. Do not let it
					accumulate and you are dealing with a fuel, not an explosive.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					What separating the gases actually means
				</h3>
				<p class="text-muted-foreground mt-2">
					The two gases are not born mixed. Hydrogen forms only at the cathode and oxygen only at
					the anode, so at the moment of creation they are already in different places, a centimetre
					or two apart. Everything after that is a plumbing problem: capture each stream at its own
					electrode and keep the two paths from ever sharing a space. "Separation" means exactly
					that, and nothing more exotic.
				</p>
				<p class="text-muted-foreground mt-2">
					Industrial cells do it with a physical barrier. A membrane or diaphragm divides the cell
					into two compartments, letting ions through to carry the current while blocking gas from
					crossing. That is what the membrane in a
					<a href="#pem" class="link">PEM cell</a> does, and it is why PEM systems deliver two clean,
					fully separated streams.
				</p>
				<p class="text-muted-foreground mt-2">
					My DIY cell has no membrane. It separates by geometry instead, using the fact that bubbles
					go straight up. An inverted bell, closed at the top and open at the bottom, sits over the
					cathode with the cathode coiled up inside it. Every hydrogen bubble that forms rises
					directly into the bell and is trapped under its closed top, where a fitting in the lid
					draws it off. The anode sits outside the bell, wrapped around it, so its oxygen rises
					through the outer part of the jar and vents separately. Two electrodes, two rising columns
					of bubbles, two destinations that never meet. It is a remarkably simple trick, and on my
					own hardware it works well: a properly seated bell delivers hydrogen with under 1 percent
					oxygen in it.
				</p>
				<p class="text-muted-foreground mt-2">
					Geometry is not a barrier, though. Some oxygen dissolves in the electrolyte and finds its
					way across, and a bubble knocked sideways can end up on the wrong side. Separation here is
					very good rather than guaranteed, which is why the design leans on the fuel-rich margin
					below.
				</p>
				<p class="text-muted-foreground mt-2">
					<span class="text-foreground font-medium">The geometry protects itself, too.</span> Restrict
					the hydrogen outlet and the gas cannot leave the way it should, so it accumulates inside the
					bell and pushes the electrolyte level down. The cathode is in there with it. As the level falls
					past the electrode, the electrode loses contact with the liquid and electrolysis simply stops,
					because there is no longer a circuit through the electrolyte to drive it. The cell quits making
					gas on its own, well before anything dramatic can happen. That interlock is a consequence of
					putting the electrode inside the bell rather than a feature anyone had to add, and it is a good
					part of why a blocked line on this design is an annoyance rather than an emergency.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					You can skip separation entirely, and that is the danger
				</h3>
				<p class="text-muted-foreground mt-2">
					Nothing forces you to separate. Drop two electrodes in a jar of electrolyte, run a single
					tube out of the lid, and you have a working electrolyser in ten minutes. It makes gas
					immediately, it needs no bell, no careful geometry, and no second vent. This is why most
					beginner videos show exactly that build, and it is genuinely the easiest way to see
					electrolysis work.
				</p>
				<p class="text-muted-foreground mt-2">
					It is also the one build I tell people not to make. That single tube carries the hydrogen
					and the oxygen together in perfect ratio, so every bubble collected, every centimetre of
					tubing, and every container downstream is full of detonating gas rather than fuel. Collect
					it in a bottle and you have built a bomb. Run it to a flame and flashback can travel back
					up the line into the whole volume at once, including the cell. The margins that make the
					separated design forgiving simply do not exist here: there is no fuel-rich buffer, no
					wrong ratio, nothing to be lucky about.
				</p>
				<p class="text-muted-foreground mt-2">
					Mixed gas does have legitimate uses. Oxyhydrogen torches run on it deliberately, and they
					survive by never storing any: the gas is consumed at the tip the instant it is made,
					behind flashback arrestors, by people treating it as the explosive it is. That is a
					controlled industrial process, not a shortcut for a home build, and none of it applies to
					a gas you intend to breathe.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">What this means for the build</h3>
				<ul class="text-muted-foreground mt-2 list-disc space-y-2 pl-6">
					<li>
						<span class="text-foreground font-medium"
							>Never plumb hydrogen and oxygen into a shared vessel</span
						>, and never route one into a container whose headspace holds the other. This is the
						reasoning behind the drain and vent architecture described in the
						<a href="#pem" class="link">PEM section</a>.
					</li>
					<li>
						<span class="text-foreground font-medium">Never store or compress the mixture.</span>
						Risk scales with how much mixed gas exists at once and whether it is confined.
					</li>
					<li>
						<span class="text-foreground font-medium">Keep the stream fuel-rich.</span> My collected hydrogen
						is nearly pure, and a fuel-rich mixture is its own protection: it takes roughly 6 percent
						oxygen contamination before the collected gas can carry a flame at all. A well-seated bell
						runs under 1 percent. That is a wide margin, and it is the margin you verify with an oxygen
						meter.
					</li>
					<li>
						<span class="text-foreground font-medium">Learn the sound.</span> Igniting a small test sample
						of well-separated hydrogen gives a soft whump. Stoichiometric mixture gives a sharp crack.
						That difference is a real diagnostic, and hearing a crack means stop and find out why your
						separation failed.
					</li>
				</ul>
			</div>

			<div>
				<h2 id="ventilation" class="text-2xl font-semibold tracking-tight">
					Gas volume in a closed space
				</h2>
				<p class="text-muted-foreground mt-3">
					It is worth knowing the actual numbers here, because they explain both why these devices
					are reasonable to run at home and why the ventilation rule is not negotiable. Hydrogen
					needs to reach about 4 percent of the air around it before it can burn. In a small
					bathroom of roughly 9.6 cubic metres, that means around 384 litres of hydrogen.
				</p>
				<div class="mt-4 overflow-x-auto">
					<table class="border-border w-full min-w-[520px] border-collapse text-sm">
						<caption class="text-muted-foreground pb-2 text-left text-xs">
							Hours of total release needed to reach 4 percent in a fully sealed room, assuming the
							gas mixes evenly
						</caption>
						<thead>
							<tr class="border-border border-b text-left">
								<th class="py-2 pr-4 font-semibold">Room</th>
								<th class="py-2 pr-4 font-semibold">One DIY cell</th>
								<th class="py-2 pr-4 font-semibold">Three cells</th>
								<th class="py-2 font-semibold">PEM module</th>
							</tr>
						</thead>
						<tbody class="text-muted-foreground">
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Bedroom, 38 m³</td>
								<td class="py-2 pr-4">1113 hours</td>
								<td class="py-2 pr-4">371 hours</td>
								<td class="py-2">51 hours</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Bathroom, 9.6 m³</td>
								<td class="py-2 pr-4">278 hours</td>
								<td class="py-2 pr-4">93 hours</td>
								<td class="py-2">13 hours</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Closet, 2.4 m³</td>
								<td class="py-2 pr-4">70 hours</td>
								<td class="py-2 pr-4">23 hours</td>
								<td class="py-2">3 hours</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-muted-foreground mt-3">
					Two things jump out. A single DIY cell releasing everything it makes into a sealed bedroom
					would need to run for over a month to make the room flammable, which is why the honest
					description of its bulk hazard is "small". And a PEM module in a closet gets there in
					three hours, which is why output scale changes the conversation completely.
				</p>
				<p class="text-muted-foreground mt-3">
					<span class="text-foreground font-medium">The average is the wrong number, though.</span>
					Hydrogen is buoyant, so it does not politely distribute itself through the room. It rises and
					forms a layer against the ceiling, and that layer reaches 4 percent long before the room average
					does. If the gas effectively occupies the top tenth of the space, every time above shrinks by
					a factor of ten: the three-cell build reaches a flammable ceiling layer in a small bathroom
					in about nine hours rather than 93, and the closet case becomes minutes. Anywhere the gas can
					be trapped against a low ceiling or inside a cabinet, assume the local concentration is far
					higher than any whole-room calculation suggests.
				</p>
				<p class="text-muted-foreground mt-3">
					<span class="text-foreground font-medium">Now the good news about ventilation.</span>
					Accumulation only happens when air is not moving. Give the room even one air change per hour,
					which is ordinary for a room with a door gap and a leaky window, and the concentration stops
					climbing and settles at a steady level set by production divided by airflow. For a single DIY
					cell in a bathroom that steady level is about 0.014 percent, well under a hundredth of the flammable
					limit. Three cells reach 0.043 percent. Even a 500 mL/min PEM module in that same bathroom settles
					around 0.31 percent, still roughly a twelfth of the way to flammable. Ventilation does not reduce
					the hazard slightly, it removes the accumulation mechanism the hazard depends on.
				</p>
				<p class="text-muted-foreground mt-3">
					So the rules are simple, and the reason to follow them even when the arithmetic says you
					have days of margin is that the arithmetic assumes you know your true release rate, that
					nothing is trapping gas near the ceiling, and that nothing has failed:
				</p>
				<ul class="text-muted-foreground mt-2 list-disc space-y-2 pl-6">
					<li>
						Always ventilate, even when the calculated volume is negligible. An open door or a
						cracked window is enough at DIY output.
					</li>
					<li>
						Never run in a closet, a cupboard, a small windowless bathroom, a tent, a car, or any
						sealed enclosure. Small volumes are where the margin disappears.
					</li>
					<li>
						Ventilate high if you can. Hydrogen collects at the ceiling, so a high opening clears it
						and a floor-level vent does almost nothing.
					</li>
					<li>
						Scale your caution with output. A single cell and a multi-cell or PEM system are
						different machines from a ventilation standpoint.
					</li>
					<li>
						Do not sleep in a closed room with a machine running, and do not leave one running
						unattended in a space you have not ventilated.
					</li>
				</ul>
			</div>

			<div>
				<h2 id="electrolytes" class="text-2xl font-semibold tracking-tight">Electrolytes</h2>
				<p class="text-muted-foreground mt-3">
					Pure water barely conducts, so electrolysis needs a dissolved ion carrier. Which one you
					choose determines what comes out of the cell besides hydrogen, and this is the single most
					consequential decision a first-time builder makes.
				</p>
				<div class="mt-4 overflow-x-auto">
					<table class="border-border w-full min-w-[560px] border-collapse text-sm">
						<thead>
							<tr class="border-border border-b text-left">
								<th class="py-2 pr-4 font-semibold">Electrolyte</th>
								<th class="py-2 pr-4 font-semibold">Verdict</th>
								<th class="py-2 font-semibold">Why</th>
							</tr>
						</thead>
						<tbody class="text-muted-foreground">
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Sodium hydroxide, 4% in distilled water</td>
								<td class="text-foreground py-2 pr-4 font-medium">My standard</td>
								<td class="py-2">
									Efficient alkaline conduction and clean gas with nickel electrodes. Use food-grade
									(E524), whose low heavy metal and chloride limits keep contaminants out of
									anything that carries over.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Potassium hydroxide</td>
								<td class="py-2 pr-4">Fine alternative</td>
								<td class="py-2">
									Slightly better conductivity and less carbonate crust, since potassium carbonate
									stays dissolved where sodium carbonate can precipitate as white buildup. Same
									caustic handling. Use food-grade (E525).
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Table salt (sodium chloride)</td>
								<td class="text-foreground py-2 pr-4 font-medium">Never</td>
								<td class="py-2">
									Chloride at the anode produces chlorine gas and hypochlorite. This is the most
									common beginner mistake and by far the most dangerous, because it puts a toxic gas
									into something you intend to breathe.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Baking soda</td>
								<td class="py-2 pr-4">Not recommended</td>
								<td class="py-2">
									Evolves carbon dioxide into the gas stream, conducts poorly, and leaves
									byproducts. Popular in videos, wrong for a breathing device.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Acids, including vinegar and citric</td>
								<td class="py-2 pr-4">Not on this design</td>
								<td class="py-2">
									Nickel corrodes in acid, so acid forces expensive platinum or mixed metal oxide
									electrodes. The mild organic acids also oxidize at the anode into carbon dioxide
									and hydrocarbons, contaminating the breathing gas. Acidic chemistry belongs to PEM
									systems, where the acid is bound inside the membrane.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Tap or plain water</td>
								<td class="py-2 pr-4">No</td>
								<td class="py-2">
									Plain water will not conduct usefully, and tap water contributes minerals and
									chloride. Distilled only, both for mixing and for topping up.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-muted-foreground mt-3">
					Two operational notes. Concentration is not a free knob: a stronger solution conducts
					better, which means more current at the same voltage and more heat, so stay at the
					documented 4 percent rather than improvising. And electrolysis consumes water while
					leaving the hydroxide behind, so a cell run for a long time slowly concentrates and draws
					creeping current. Top up with distilled water to bring it back, and never top up with more
					electrolyte.
				</p>
			</div>

			<div>
				<h2 id="electrodes" class="text-2xl font-semibold tracking-tight">Electrodes</h2>
				<p class="text-muted-foreground mt-3">
					The electrode is in direct electrical contact with a caustic solution while being actively
					driven, which is about the harshest treatment you can give a metal. Whatever corrodes ends
					up in the electrolyte, and from there in the mist and the gas.
				</p>
				<div class="mt-4 overflow-x-auto">
					<table class="border-border w-full min-w-[560px] border-collapse text-sm">
						<thead>
							<tr class="border-border border-b text-left">
								<th class="py-2 pr-4 font-semibold">Material</th>
								<th class="py-2 pr-4 font-semibold">Verdict</th>
								<th class="py-2 font-semibold">Why</th>
							</tr>
						</thead>
						<tbody class="text-muted-foreground">
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Pure nickel (99.6%, Ni200)</td>
								<td class="text-foreground py-2 pr-4 font-medium">My standard</td>
								<td class="py-2">
									The established alkaline electrode. Stable in hydroxide, and validated on my own
									hardware over weeks of running with the electrolyte staying water-clear.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Stainless steel as the anode</td>
								<td class="py-2 pr-4">Avoid</td>
								<td class="py-2">
									Under anodic drive in alkali, chromium can leach as hexavalent chromium, which is
									toxic and a known carcinogen. Passive contact elsewhere in the circuit is a
									different matter.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Copper and brass</td>
								<td class="text-foreground py-2 pr-4 font-medium">Never</td>
								<td class="py-2">
									Corrode readily and leach copper and zinc into the electrolyte and the gas. Keep
									copper out of the wetted path entirely, including fasteners and connections.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Aluminum</td>
								<td class="text-foreground py-2 pr-4 font-medium">Never</td>
								<td class="py-2">
									Reacts violently with sodium hydroxide, generating its own hydrogen and consuming
									itself. This applies to vessels and fittings, not just electrodes.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Zinc and galvanized steel</td>
								<td class="py-2 pr-4">Never</td>
								<td class="py-2">Reacts, contaminates, and is toxic.</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Bare titanium</td>
								<td class="py-2 pr-4">Poor as an electrode</td>
								<td class="py-2">
									Passivates and stops conducting usefully. It is a substrate for coatings, not an
									electrode in itself.
								</td>
							</tr>
							<tr class="border-border border-b">
								<td class="py-2 pr-4">Platinized titanium, mixed metal oxide, platinum</td>
								<td class="py-2 pr-4">Excellent, expensive</td>
								<td class="py-2">
									Genuinely inert. This is what PEM cells use internally, and the cost is why the
									DIY track uses nickel instead.
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Check that your nickel is actually nickel
				</h3>
				<p class="text-muted-foreground mt-2">
					Much of the "nickel strip" sold for battery spot-welding is nickel-plated steel. It looks
					right and it is cheap, and sanding it for surface area grinds straight through the plating
					and exposes a steel core that will rust iron oxide into your gas. A strong magnet grabs
					plated steel hard and pure nickel only weakly. Buy on the specification (99.6 percent,
					Ni200) rather than the product photo.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					What a healthy electrode looks like
				</h3>
				<p class="text-muted-foreground mt-2">
					Under power the nickel anode darkens to a grey film and returns to bright metal when the
					cell is off. That is nickel oxyhydroxide, the same reversible surface chemistry as the
					positive plate of a nickel battery, and it is protective rather than corrosive. The
					failure signature is the opposite and easy to distinguish: black particulate flaking off,
					cloudy electrolyte, sludge in the bottom of the jar, or visible pitting. An adherent film
					with clear electrolyte means the cell is behaving. Sludge means metal is leaving the
					electrode, and where it goes next is your gas.
				</p>
				<p class="text-muted-foreground mt-3">
					One subtlety worth knowing: a material can be unacceptable as an electrode but fine as a
					structural part or feedthrough, because the damage comes from being electrically driven in
					the solution. Stainless is acceptable where it carries current but never touches
					electrolyte. Copper is not acceptable anywhere in the wetted path at all.
				</p>
			</div>

			<div>
				<h2 id="lye" class="text-2xl font-semibold tracking-tight">
					Sodium hydroxide (lye): handling it without hurting yourself
				</h2>
				<p class="text-muted-foreground mt-3">
					Lye is the one material in this project that will hurt you on contact rather than through
					some failure chain. It is worth understanding what it does. Sodium hydroxide dissolves
					fats and proteins, converting them into soap. That is the mechanism behind every warning
					below: it is why it destroys clothing, why it damages eyes so quickly, and why skin
					contact feels slippery. That soapy feeling is not the lye being mild, it is your own skin
					being saponified. Treat slipperiness as an alarm, not a reassurance.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">Before you open the container</h3>
				<ul class="text-muted-foreground mt-2 list-disc space-y-2 pl-6">
					<li>
						<span class="text-foreground font-medium">Gloves and eye protection, every time</span>,
						including for what feels like a trivial top-up. Nitrile gloves, and sealed splash
						goggles rather than glasses, since glasses leave the whole perimeter open to a splash.
					</li>
					<li>
						<span class="text-foreground font-medium">Dress for it.</span> Long sleeves, closed shoes,
						and clothes you do not care about. Lye eats fabric, and cotton often looks fine until it dries
						and then falls apart into holes.
					</li>
					<li>
						<span class="text-foreground font-medium"
							>Have running water within reach before you start</span
						>, not down the hall. The first seconds matter more than anything else you will do.
					</li>
					<li>
						<span class="text-foreground font-medium">Work away from food, pets and children</span>,
						on a surface you can flood with water, and keep dedicated utensils that never go back to
						the kitchen.
					</li>
				</ul>

				<h3 class="text-foreground mt-6 text-lg font-semibold">Mixing</h3>
				<p class="text-muted-foreground mt-2">
					Always add the lye to the water, slowly, and never pour water onto lye. Dissolving is
					strongly exothermic and a concentrated mix can get near boiling, so adding water to a pile
					of dry hydroxide can spit hot caustic back at you. Use cold distilled water, stir gently
					as you add, and let it cool before use. Mix in polypropylene, HDPE, or borosilicate glass.
					Never aluminum, which reacts with lye vigorously enough to generate hydrogen of its own
					and destroy the vessel. Do not lean over the container while it dissolves, and keep the
					area ventilated.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">If it spills</h3>
				<ul class="text-muted-foreground mt-2 list-disc space-y-3 pl-6">
					<li>
						<span class="text-foreground font-medium">On skin:</span> flush with plenty of cool running
						water for at least 15 to 20 minutes, and remove contaminated clothing while you are flushing
						rather than before. Do not try to neutralize it with vinegar or anything acidic on skin, because
						that reaction releases heat and adds a thermal burn to a chemical one. Water, and lots of
						it, is the answer. Get medical attention for anything beyond a small splash caught immediately.
					</li>
					<li>
						<span class="text-foreground font-medium">In eyes:</span> this is an emergency. Flush immediately
						with water for at least 20 minutes, holding the eyelids open, and get emergency medical care
						while flushing or straight afterward. Alkali eye injuries progress fast and can be permanent,
						and they are notoriously worse than they feel in the first minute.
					</li>
					<li>
						<span class="text-foreground font-medium">Swallowed:</span> do not induce vomiting, which
						would send it through the throat a second time. Rinse the mouth, sip a little water, and call
						poison control or emergency services immediately.
					</li>
					<li>
						<span class="text-foreground font-medium">On a surface:</span> gloves on, dilute with plenty
						of water, then absorb and dispose. Vinegar is reasonable for neutralizing the last residue
						on a hard surface, but only after dilution, never as the first move on a puddle of concentrate.
					</li>
					<li>
						<span class="text-foreground font-medium">On clothing:</span> take it off and rinse the skin
						underneath. Assume the garment is ruined, because it very likely is.
					</li>
				</ul>

				<h3 class="text-foreground mt-6 text-lg font-semibold">Storage</h3>
				<p class="text-muted-foreground mt-2">
					Keep it sealed in labeled HDPE, dry, and out of reach. Lye is hygroscopic: left open it
					pulls in water and carbon dioxide from the air, clumping and slowly converting to
					carbonate, which weakens your electrolyte and leaves deposits. Store it away from acids
					and away from aluminum.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Keep oils out, or the cell will foam
				</h3>
				<p class="text-muted-foreground mt-2">
					This one is not obvious and it catches people. The oils from your fingers, left on
					glassware, tubing, or electrodes during assembly, saponify in the caustic solution. You
					are making a small amount of soap inside your cell, and soap in a vessel with gas bubbling
					through it means foam. That matters for more than tidiness: foam climbs, and it carries
					liquid electrolyte up into the gas line, which defeats the bubbler and puts caustic into
					the stream you intend to breathe.
				</p>
				<p class="text-muted-foreground mt-2">
					So degrease every wetted part before assembly, handle clean components with gloves, and
					keep oils, silicone grease, and lubricants out of the wetted path entirely. Rinse with
					distilled water after cleaning. If you see persistent foaming in a cell that used to run
					clear, that is a signal something oily has got in. Stop, drain, clean, and refill rather
					than running it and hoping the filters cope.
				</p>
			</div>

			<div>
				<h2 id="diy-cells" class="text-2xl font-semibold tracking-tight">DIY alkaline cells</h2>
				<p class="text-muted-foreground mt-3">
					The open source build: a membraneless cell in a mason jar, pure nickel electrodes, 4
					percent sodium hydroxide in distilled water, an inverted collection bell, and a bubbler
					feeding a nasal cannula. Inhalation only.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Caustic mist is the main inhalation hazard
				</h3>
				<p class="text-muted-foreground mt-2">
					Electrolysis can carry a fine sodium hydroxide aerosol along with the gas, and inhaling
					caustic mist burns the airway. This is the single most important point for an alkaline
					generator and the easiest one to miss. Never breathe from this cell without a bubbler in
					the line.
				</p>
				<p class="text-muted-foreground mt-2">
					<span class="text-foreground font-medium">The bubbler is the workhorse.</span> A jar of distilled
					water with the gas bubbled through it: the stream slows as it enters the wider vessel, and droplets
					fall back out instead of carrying on down the tube. In my own use this has been enough on its
					own, and no further filtration stage has been needed. The condition attached to that is not
					optional, though. The bubbler water accumulates the caustic it strips, and once it turns alkaline
					enough it starts re-aerosolizing what it caught, which quietly turns your protection into a
					source. Change it regularly, and use the pH check below to decide when rather than guessing.
					Around pH 9 to 10 is the point to replace it.
				</p>
				<p class="text-muted-foreground mt-2">
					<span class="text-foreground font-medium">Optional extra stages.</span> Here are two more stages
					you can add if you want to be more thorough, though I have not tested them myself: a coalescing
					demister, a plug of PTFE or polypropylene mesh in a wide tube where fine droplets collect and
					drain back, and after that a medical hydrophobic breathing filter, which blocks liquid aerosol
					absolutely and adds bacterial and viral filtration. If you do fit them, keep that order, with
					the bubbler first knocking out the bulk so the filter stays dry and low resistance. One material
					warning: never use glass wool in a breathing line, because it sheds fibers.
				</p>
				<p class="text-muted-foreground mt-2">
					Remove aerosol, not humidity. After scrubbing, the gas is fully humidified and that is
					desirable, since dry gas is harsh on airways. Whatever you fit, every stage has to be low
					resistance: no fine diffuser stones, no tall packed columns. Their backpressure would push
					the bell down and vent gas at the rim, which as the
					<a href="#browns-gas" class="link">separation section</a> explains is also how you end up mixing
					your own gases.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					The cell cannot build pressure, by design
				</h3>
				<p class="text-muted-foreground mt-2">
					The collection bell is open at the bottom and the oxygen port is open to atmosphere, so
					the most pressure it can hold is the few centimeters of liquid it can displace. Block the
					outlet and the accumulating gas pushes that level down until it uncovers the cathode, at
					which point electrolysis stops for want of an electrode in contact with the electrolyte.
					The cell talks itself out of the problem: it stops making gas rather than building
					pressure. Both of those properties depend on the bell staying open, so never seal or
					pressurize this cell, and never fit valves or restrictors downstream that could dead-head
					the line.
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
						Alkaline means caustic mist is getting through: change the bubbler water, and consider adding
						the optional filter stages.
					</li>
					<li>
						<span class="text-foreground font-medium">The flame test.</span> A soft whump with a pale
						blue, nearly invisible flame is the target. A sharp crack means the gases are mixing and you
						should stop. An orange flame is sodium, a free visual readout of the exact caustic mist you
						must not inhale.
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
				<h2 id="pem" class="text-2xl font-semibold tracking-tight">PEM systems</h2>
				<p class="text-muted-foreground mt-3">
					Sealed solid-state cells running on pure water with no caustic electrolyte. That removes
					the mist and handling hazards entirely and replaces them with a different set, because a
					PEM system can hold real pressure and its gas paths can be closed.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Constant current only, and this is the mistake that destroys cells
				</h3>
				<p class="text-muted-foreground mt-2">
					A PEM cell behaves like a diode. Below roughly 1.5 volts almost nothing flows, and then
					current rises nearly vertically with tiny increases in voltage. On my own bench cell the
					slope worked out to about 26 amps per 100 millivolts. Put a 5 volt USB source across it
					and it will try to draw hundreds of watts through a few square centimetres of membrane
					until something gives.
				</p>
				<p class="text-muted-foreground mt-2">
					It gets worse with heat: a PEM cell needs less voltage as it warms, so at fixed voltage
					the current climbs as it heats, which heats it further. That is textbook thermal runaway,
					and constant-current operation removes the failure mode entirely. Set a current limit
					first and let the cell take whatever voltage it needs, typically 1.5 to 2.2 volts. Never
					connect a PEM cell to a USB charger, a wall adapter, a battery, or any supply with its
					current knob wide open, including the supplies used for the DIY alkaline build.
				</p>
				<p class="text-muted-foreground mt-2">
					A hard voltage ceiling just above normal operating voltage is cheap, passive protection
					that does not depend on firmware. On my bench a 3.5 volt compliance ceiling limited a
					reverse-connected cell to 1.8 amps instead of 5.09, cutting the damage roughly threefold.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Polarity is a gas routing hazard, not just a component one
				</h3>
				<p class="text-muted-foreground mt-2">
					Reversing a PEM cell does not merely risk the catalyst. It sends hydrogen out of the port
					that normally carries oxygen. In a bench incident, 15 minutes of reversed polarity put an
					estimated 571 mL of hydrogen into a reservoir headspace designed to see only oxygen, which
					is exactly the
					<a href="#browns-gas" class="link">detonating mixture</a> the rest of the design exists to prevent.
					Polarity should be fixed by construction with non-reversible connectors internally, and vents
					should be sized on the assumption they may one day see hydrogen.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					A pressurized hydrogen path must never be a closed one
				</h3>
				<p class="text-muted-foreground mt-2">
					Holding pressure means the gas has somewhere to accumulate, and at these production rates
					that happens quickly: a sealed 100 mL headspace goes from 1 to 8 bar in about 18 minutes.
					Any such system needs a pressure relief valve set below its weakest component, a pressure
					sensor that can throttle or stop the current, and no configuration in which a blocked
					outlet simply builds pressure.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Water carryover and the detonating gas scenario
				</h3>
				<p class="text-muted-foreground mt-2">
					Liquid water comes out of the hydrogen port by design, pulled across the membrane with
					each proton, at roughly 7 to 10 mL per hour on a single cell at 5 amps. That water has to
					be trapped and returned, which creates the system's sharpest hazard: if a drain empties
					completely, hydrogen follows the water into a reservoir headspace that already contains
					oxygen. It takes very little. Ten millilitres of slipped hydrogen in a 200 mL headspace
					reaches 5 percent, which is above the flammability limit.
				</p>
				<p class="text-muted-foreground mt-2">
					Use more than one defense: a liquid seal or U-trap in the drain line, which passively
					blocks gas with no logic to fail; a drain that always stops with liquid remaining rather
					than emptying; a drain that terminates below the reservoir waterline; and generous venting
					so nothing can accumulate even if some slips through.
				</p>

				<h3 class="text-foreground mt-6 text-lg font-semibold">
					Never put anything in the water you would not put in the cell
				</h3>
				<p class="text-muted-foreground mt-2">
					This one comes from an actual bench incident: essential oil added to a bubbler as a scent
					experiment. A user-fillable humidifier must never drain back into the feed water, or a
					pleasant idea becomes a poisoned membrane. Keep the sealed, service-only water trap and
					the user-cleanable humidifier as separate things, and never route scent into a breathing
					stream. Aerosolized oil is the documented cause of lipoid pneumonia, it attacks seals, and
					it injures corneas.
				</p>
				<p class="text-muted-foreground mt-2">
					One more subtlety worth knowing: as a cell cools after shutdown, the contracting gas can
					siphon humidifier water back toward the cell. Raising the hydrogen line into an inverted U
					before it descends solves it passively, with nothing to stick.
				</p>
			</div>

			<div class="border-border border-t pt-8">
				<h2 id="status" class="text-2xl font-semibold tracking-tight">Status of this document</h2>
				<p class="text-muted-foreground mt-3">
					This is working safety documentation from an active project. The materials guidance is
					validated on my own hardware but has not yet had a formal qualified review covering
					chemical, gas, and electrical safety, and the PEM section describes a system still in
					bench testing. The lye first-aid guidance follows standard chemical safety practice and is
					not a substitute for the safety data sheet that comes with your product, or for
					professional medical advice in an actual incident. Treat it as the beginning of your own
					diligence rather than the end of it, and see the
					<a href="/disclaimer" class="link">full disclaimer</a> for what that means legally.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.danger-panel {
		background-color: var(--danger-bg);
		border-color: var(--danger);
		color: var(--danger-fg);
	}

	.danger-mark {
		color: var(--danger);
	}

	.danger-list ::marker,
	.danger-list li::marker {
		color: var(--danger);
	}
</style>
