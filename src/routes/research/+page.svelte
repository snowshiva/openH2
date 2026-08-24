<script lang="ts">
	import SectionNav from '$lib/components/SectionNav.svelte';

	const sections = [
		{
			id: 'hardware',
			label: 'Hardware research',
			children: [
				{ id: 'diy-electrolyzers', label: 'DIY electrolyzers' },
				{ id: 'pem-electrolyzers', label: 'PEM electrolyzers' }
			]
		},
		{
			id: 'health',
			label: 'Health research',
			children: [
				{ id: 'evidence', label: 'How I handle evidence' },
				{ id: 'science', label: 'Origins and mechanism' },
				{ id: 'metabolic', label: 'Metabolic health' },
				{ id: 'exercise', label: 'Exercise and recovery' },
				{ id: 'cancer', label: 'Cancer supportive care' },
				{ id: 'neuro', label: 'Neurological conditions' },
				{ id: 'lungs', label: 'Lungs and smoking damage' }
			]
		}
	];
</script>

<svelte:head>
	<title>Research | openH2</title>
	<meta
		name="description"
		content="Two kinds of research: measurements from real electrolyzer hardware, and what the published evidence says about hydrogen and health."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">Research</h1>
	<p class="text-muted-foreground mt-4 max-w-2xl text-lg">
		Two different things live here. Hardware research is what I measure on my own bench: output,
		dose, and how the cells behave in practice. Health research is what the published literature
		says about hydrogen in the body, graded by how good the evidence actually is.
	</p>

	<div class="mt-12 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-12">
		<SectionNav {sections} />

		<div class="space-y-14 lg:max-w-2xl">
			<div>
				<h2 id="hardware" class="text-2xl font-semibold tracking-tight">Hardware research</h2>
				<p class="text-muted-foreground mt-3">What I have measured on my own bench so far.</p>

				<h3 id="diy-electrolyzers" class="text-foreground mt-8 text-lg font-semibold">
					DIY electrolyzers
				</h3>
				<p class="text-muted-foreground mt-2">
					To estimate actual dosage from a DIY electrolyzer I used the following. Electrolysis
					output follows Faraday's law: roughly 7.6 mL of hydrogen per minute for every amp of
					current, per cell. A single DIY cell at 3 amps makes about 23 mL per minute. Divide that
					by how much air you breathe and a single cell delivers a sustained inspired concentration
					of roughly 0.4 to 1 percent, depending on how you breathe. Clinical studies typically use
					1 to 4 percent, so one cell is a gentle, low-dose device.
				</p>
				<p class="text-muted-foreground mt-2">
					The useful corollary: you cannot inhale more hydrogen than you make. Output scales with
					current and with the number of cells, not with voltage, so stacking two or three cells in
					series brings the same design into the clinically studied range. The numbers,
					configurations, and scaling table live on the
					<a href="/plans-and-parts#configurations" class="link">Plans &amp; Parts</a> page.
				</p>

				<h3 id="pem-electrolyzers" class="text-foreground mt-8 text-lg font-semibold">
					PEM electrolyzers
				</h3>
				<p class="text-muted-foreground mt-2">
					Recent highlights from the current test campaign on PEM cell hardware:
				</p>
				<ul class="text-muted-foreground mt-2 list-disc space-y-2 pl-6">
					<li>
						First confirmed hydrogen production from a single PEM cell, running on an unpumped
						gas-lift water loop. The passive loop works: no pump needed at bench scale.
					</li>
					<li>
						Multi-hour continuous runs completed, including a 3-hour run that exposed an
						under-counted water balance and a measured water carryover rate on the hydrogen line.
					</li>
					<li>
						Water comes out of the hydrogen port continuously. It is not a leak: each proton
						crossing the membrane drags water molecules with it, so the gas side is wet by design.
						The rate is slow, measured at roughly one drop every 75 seconds at 5 amps, but it never
						stops, which is why the hydrogen line needs a trap that returns the water to the
						reservoir rather than letting it collect in the tubing.
					</li>
				</ul>
			</div>

			<div>
				<h2 id="health" class="text-2xl font-semibold tracking-tight">Health research</h2>
				<p class="text-muted-foreground mt-3">
					Ordered roughly by how well supported each area is, strongest first. None of this is
					medical advice; see the
					<a href="/health-and-h2" class="link">Health &amp; H₂</a> page for the plain-language version.
				</p>

				<h3 id="evidence" class="text-foreground mt-8 text-lg font-semibold">
					How I handle evidence
				</h3>
				<p class="text-muted-foreground mt-2">
					Every study I cite gets labeled by what it actually is: a human randomized trial, a small
					human pilot, or animal and preclinical work. Most mechanistic hydrogen research is
					preclinical, and a large share of the exciting results have never been replicated in
					people. Where my own measurements are estimates rather than measurements, I mark them as
					estimates.
				</p>

				<h3 id="science" class="text-foreground mt-8 text-lg font-semibold">
					Origins and mechanism
				</h3>
				<p class="text-muted-foreground mt-2">
					Hydrogen therapy did not begin in a laboratory. Japan has been electrolyzing drinking
					water for health since the 1950s: the first machines were built there between 1952 and
					1954, agricultural and then clinical interest followed, and in 1965 the Japanese Ministry
					of Health approved water ionizers as medical devices for gastrointestinal complaints.
					Nobody called it hydrogen therapy at the time; the machines were sold on alkalinity. But
					what forms at the cathode is water carrying dissolved hydrogen gas, and a leading
					explanation today is that the dissolved hydrogen, rather than the pH, accounts for what
					those users were experiencing. Sixty years of routine domestic use is part of why
					hydrogen's safety record is considered so strong.
					<a
						href="https://www.sciencedirect.com/science/article/pii/S0924224411002408"
						class="link"
						target="_blank"
						rel="noopener noreferrer">Review of electrolyzed reduced water research</a
					>.
				</p>
				<p class="text-muted-foreground mt-2">
					Modern hydrogen medicine starts with Ohsawa and colleagues in <em>Nature Medicine</em>
					(2007), who showed that molecular hydrogen selectively reduces the hydroxyl radical, the most
					destructive reactive oxygen species in the body, along with peroxynitrite, while leaving alone
					the milder oxidants the body uses for normal signaling (<a
						href="https://pubmed.ncbi.nlm.nih.gov/17486089/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">Nature Medicine</a
					>). That selectivity is hydrogen's defining feature as an antioxidant: it blunts the worst
					damage without flattening useful redox signaling.
				</p>
				<p class="text-muted-foreground mt-2">
					Hydrogen is also the smallest molecule there is, and nonpolar, so it diffuses freely
					through tissue, across cell membranes, across the blood-brain barrier, and into
					mitochondria, exactly where the most damaging radicals form. Beyond direct scavenging,
					current reviews emphasize activation of the Keap1-Nrf2 pathway, the cell's master
					antioxidant-response system, which upregulates the body's own protective enzymes.
				</p>
				<p class="text-muted-foreground mt-2">
					The exact mechanism is still actively debated. Some researchers argue direct radical
					scavenging is too slow at physiological concentrations to explain the observed effects,
					pointing instead to signaling pathways.
				</p>

				<h3 id="metabolic" class="text-foreground mt-8 text-lg font-semibold">Metabolic health</h3>
				<p class="text-muted-foreground mt-2">
					The most studied area in humans, and the one where results conflict most. A 2023
					meta-analysis of hydrogen-rich water trials found improved blood lipids (<a
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9967957/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">review</a
					>), while a later analysis of eight randomized trials covering 357 patients found the same
					changes mostly fell short of statistical significance (<a
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742746/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">review</a
					>). A real but small effect at best.
				</p>

				<h3 id="exercise" class="text-foreground mt-8 text-lg font-semibold">
					Exercise and recovery
				</h3>
				<p class="text-muted-foreground mt-2">
					The best supported human result. A 2023 systematic review and meta-analysis found reduced
					fatigue and improved aerobic capacity in healthy adults, with the size of the effect
					depending on training status, how long hydrogen was taken, and the type of exercise (<a
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9934906/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">Frontiers in Nutrition</a
					>).
				</p>

				<h3 id="cancer" class="text-foreground mt-8 text-lg font-semibold">
					Cancer supportive care
				</h3>
				<p class="text-muted-foreground mt-2">
					An established supportive role. A systematic review of hydrogen in cancer management
					reports improvements in quality of life and in the side effects of chemotherapy and
					radiotherapy (<a
						href="https://pubmed.ncbi.nlm.nih.gov/36708550/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">systematic review</a
					>). That means alongside standard treatment and under oncology supervision. Hydrogen is
					not a cancer treatment.
				</p>

				<h3 id="neuro" class="text-foreground mt-8 text-lg font-semibold">
					Neurological conditions
				</h3>
				<p class="text-muted-foreground mt-2">
					Mechanistically the most attractive area and clinically the most disappointing so far.
					Hydrogen crosses the blood-brain barrier freely, which makes the theory compelling, but a
					randomized double-blind placebo-controlled trial of hydrogen inhalation in Parkinson's
					disease found no significant benefit over placebo across 16 weeks (<a
						href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8519836/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">pilot RCT</a
					>).
				</p>

				<h3 id="lungs" class="text-foreground mt-8 text-lg font-semibold">
					Lungs and smoking damage
				</h3>
				<p class="text-muted-foreground mt-2">
					The reason this project exists, and still animal work. In smoke-exposed mice, hydrogen
					inhalation reduced emphysema, chronic bronchitis, and small airway remodeling, with the
					protection attributed to anti-inflammatory and antioxidant activity (<a
						href="https://pubmed.ncbi.nlm.nih.gov/30069319/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">J Thorac Dis</a
					>). Biological plausibility, not human proof.
				</p>
			</div>
		</div>
	</div>
</section>
