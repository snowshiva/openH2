<svelte:head>
	<title>Research | openH2</title>
	<meta
		name="description"
		content="How openH2 handles evidence: published studies, honest dosimetry, and live bench notes from real hardware."
	/>
</svelte:head>

<section class="mx-auto max-w-3xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">Research</h1>
	<p class="text-muted-foreground mt-4 text-lg">
		Hydrogen therapy attracts hype. My rule is simple: every claim gets matched to published
		research, every number gets measured on real hardware, and uncertainty gets stated plainly,
		including when it cuts against me.
	</p>

	<div class="mt-12 space-y-12">
		<div>
			<h2 class="text-2xl font-semibold tracking-tight">How I handle evidence</h2>
			<p class="text-muted-foreground mt-3">
				Every study I cite gets labeled by what it actually is: a human randomized trial, a small
				human pilot, or animal and preclinical work. Most mechanistic hydrogen research is
				preclinical, and a large share of the exciting results have never been replicated in people.
				I say so. Where my own measurements are estimates rather than measurements, I mark them as
				estimates.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">The foundational science</h2>
			<p class="text-muted-foreground mt-3">
				Modern hydrogen medicine starts with Ohsawa and colleagues in <em>Nature Medicine</em>
				(2007), who showed that molecular hydrogen selectively reduces the hydroxyl radical, the most
				destructive reactive oxygen species in the body, along with peroxynitrite, while leaving alone
				the milder oxidants the body uses for normal signaling. That selectivity is hydrogen's defining
				feature as an antioxidant: it blunts the worst damage without flattening useful redox signaling.
			</p>
			<p class="text-muted-foreground mt-3">
				Hydrogen is also the smallest molecule there is, and nonpolar, so it diffuses freely through
				tissue, across cell membranes, across the blood-brain barrier, and into mitochondria,
				exactly where the most damaging radicals form. Beyond direct scavenging, current reviews
				emphasize activation of the Keap1-Nrf2 pathway, the cell's master antioxidant-response
				system, which upregulates the body's own protective enzymes.
			</p>
			<p class="text-muted-foreground mt-3">
				An honest caveat I keep front and center: the exact mechanism is still actively debated.
				Some researchers argue direct radical scavenging is too slow at physiological concentrations
				to explain the observed effects, pointing instead to signaling pathways. I lead with effects
				observed and hedge on why.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">The evidence ladder</h2>
			<p class="text-muted-foreground mt-3">Ranked plainly, from strongest to weakest:</p>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">Strongest human data:</span> metabolic health and
					blood lipids (multiple trials and a meta-analysis showing reduced cholesterol and triglycerides),
					and exercise recovery (reduced lactate and fatigue in athlete trials).
				</li>
				<li>
					<span class="text-foreground font-medium">Established supportive role:</span>
					blunting the side effects of cancer treatment, strictly as supportive care under oncology supervision,
					never as a treatment itself.
				</li>
				<li>
					<span class="text-foreground font-medium">Promising but unproven:</span>
					neurological conditions. The mechanism is attractive, but Parkinson's trials have been inconsistent,
					and the honest read is unproven.
				</li>
				<li>
					<span class="text-foreground font-medium">Mostly animal work:</span> lung protection in smoke-exposure
					models (directly relevant to why this project exists), wound healing, and most of the mechanistic
					literature. Biological plausibility, not human proof.
				</li>
			</ul>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">
				Dosimetry: how much hydrogen you actually get
			</h2>
			<p class="text-muted-foreground mt-3">
				This is the question most sellers skip, so I did the math and then verified it on the bench.
				Electrolysis output follows Faraday's law: roughly 7.6 mL of hydrogen per minute for every
				amp of current, per cell. A single DIY cell at 3 amps makes about 23 mL per minute. Divide
				that by how much air you breathe and a single cell delivers a sustained inspired
				concentration of roughly 0.4 to 1 percent, depending on how you breathe. Clinical studies
				typically use 1 to 4 percent, so one cell is a gentle, low-dose device and I say so plainly.
			</p>
			<p class="text-muted-foreground mt-3">
				The useful corollary: you cannot inhale more hydrogen than you make. Output scales with
				current and with the number of cells, not with voltage, so stacking two or three cells in
				series brings the same design into the clinically studied range. The numbers,
				configurations, and scaling table live on the
				<a href="/plans-and-parts" class="link">Plans &amp; Parts</a> page.
			</p>
		</div>

		<div>
			<h2 class="text-2xl font-semibold tracking-tight">From the bench</h2>
			<p class="text-muted-foreground mt-3">
				This project keeps a live engineering notebook, and the useful findings get published here
				as they happen. Recent highlights from the current test campaign on PEM cell hardware:
			</p>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					First confirmed hydrogen production from a single PEM cell, running on an unpumped
					gas-lift water loop. The passive loop works: no pump needed at bench scale.
				</li>
				<li>
					Multi-hour continuous runs completed, including a 3-hour run that exposed an under-counted
					water balance and a measured water carryover rate on the hydrogen line.
				</li>
				<li>
					An accidental polarity reversal became a useful stress test. The supply's voltage ceiling
					acted as a safety limit, and an overnight cool-down test confirmed the cell recovered
					fully: stable cold-start voltage at full current.
				</li>
				<li>
					A week of confusing voltage drift traced, step by step, to contact resistance in test
					leads rather than cell degradation. The takeaway is now protocol: measure your lead
					resistance first and correct every reading for it.
				</li>
			</ul>
			<p class="text-muted-foreground mt-3">
				A full bibliography with evidence grading for every citation is in preparation and will be
				published on this page.
			</p>
		</div>
	</div>
</section>
