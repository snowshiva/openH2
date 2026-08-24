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
		Hydrogen therapy attracts hype. Every claim here is matched to published research, and every
		number is measured on real hardware.
	</p>

	<div class="mt-12 space-y-12">
		<div>
			<h2 id="evidence" class="text-2xl font-semibold tracking-tight">How I handle evidence</h2>
			<p class="text-muted-foreground mt-3">
				Every study I cite gets labeled by what it actually is: a human randomized trial, a small
				human pilot, or animal and preclinical work. Most mechanistic hydrogen research is
				preclinical, and a large share of the exciting results have never been replicated in people.
				Where my own measurements are estimates rather than measurements, I mark them as estimates.
			</p>
		</div>

		<div>
			<h2 id="science" class="text-2xl font-semibold tracking-tight">The foundational science</h2>
			<p class="text-muted-foreground mt-3">
				Hydrogen therapy did not begin in a laboratory. Japan has been electrolyzing drinking water
				for health since the 1950s: the first machines were built there between 1952 and 1954,
				agricultural and then clinical interest followed, and in 1965 the Japanese Ministry of
				Health approved water ionizers as medical devices for gastrointestinal complaints. Nobody
				called it hydrogen therapy at the time; the machines were sold on alkalinity. But what forms
				at the cathode is water carrying dissolved hydrogen gas, and a leading explanation today is
				that the dissolved hydrogen, rather than the pH, accounts for what those users were
				experiencing. Sixty years of routine domestic use is part of why hydrogen's safety record is
				considered so strong.
				<a
					href="https://www.sciencedirect.com/science/article/pii/S0924224411002408"
					class="link"
					target="_blank"
					rel="noopener noreferrer">Review of electrolyzed reduced water research</a
				>.
			</p>
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
				The exact mechanism is still actively debated. Some researchers argue direct radical
				scavenging is too slow at physiological concentrations to explain the observed effects,
				pointing instead to signaling pathways.
			</p>
		</div>

		<div>
			<h2 id="evidence-ladder" class="text-2xl font-semibold tracking-tight">
				The evidence ladder
			</h2>
			<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
				<li>
					<span class="text-foreground font-medium">Best human evidence:</span> exercise recovery,
					where a 2023 meta-analysis found reduced fatigue and improved aerobic capacity (<a
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9934906/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">Frontiers in Nutrition</a
					>). Metabolic effects are studied more but the results conflict: a 2023 meta-analysis
					found improved blood lipids (<a
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9967957/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">review</a
					>), while a later analysis of eight randomized trials found the same changes mostly fell
					short of statistical significance (<a
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742746/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">review</a
					>).
				</li>
				<li>
					<span class="text-foreground font-medium">Supportive care only:</span> blunting the side
					effects of cancer treatment, strictly alongside standard therapy and under oncology
					supervision, never as a treatment itself (<a
						href="https://pubmed.ncbi.nlm.nih.gov/36708550/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">systematic review</a
					>).
				</li>
				<li>
					<span class="text-foreground font-medium">Promising but unproven:</span> neurological
					conditions. The mechanism is attractive, but a randomized double-blind trial of hydrogen
					inhalation in Parkinson's disease found no significant benefit over placebo (<a
						href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8519836/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">pilot RCT</a
					>).
				</li>
				<li>
					<span class="text-foreground font-medium">Mostly animal work:</span> lung protection in
					smoke-exposure models, directly relevant to why this project exists, where hydrogen
					inhalation reduced emphysema and airway remodeling in mice (<a
						href="https://pubmed.ncbi.nlm.nih.gov/30069319/"
						class="link"
						target="_blank"
						rel="noopener noreferrer">J Thorac Dis</a
					>). Also wound healing and most of the mechanistic literature. Biological plausibility,
					not human proof.
				</li>
			</ul>
		</div>

		<div>
			<h2 id="dosimetry" class="text-2xl font-semibold tracking-tight">
				Dosimetry: how much hydrogen you actually get
			</h2>
			<p class="text-muted-foreground mt-3">
				To estimate actual dosage from a DIY electrolyzer I used the following. Electrolysis output
				follows Faraday's law: roughly 7.6 mL of hydrogen per minute for every amp of current, per
				cell. A single DIY cell at 3 amps makes about 23 mL per minute. Divide that by how much air
				you breathe and a single cell delivers a sustained inspired concentration of roughly 0.4 to
				1 percent, depending on how you breathe. Clinical studies typically use 1 to 4 percent, so
				one cell is a gentle, low-dose device.
			</p>
			<p class="text-muted-foreground mt-3">
				The useful corollary: you cannot inhale more hydrogen than you make. Output scales with
				current and with the number of cells, not with voltage, so stacking two or three cells in
				series brings the same design into the clinically studied range. The numbers,
				configurations, and scaling table live on the
				<a href="/plans-and-parts#configurations" class="link">Plans &amp; Parts</a> page.
			</p>
		</div>

		<div>
			<h2 id="pem-electrolyzers" class="text-2xl font-semibold tracking-tight">
				PEM electrolyzers
			</h2>
			<p class="text-muted-foreground mt-3">
				Recent highlights from the current test campaign on PEM cell hardware:
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
					Water comes out of the hydrogen port continuously. It is not a leak: each proton crossing
					the membrane drags water molecules with it, so the gas side is wet by design. The rate is
					slow, measured at roughly one drop every 75 seconds at 5 amps, but it never stops, which
					is why the hydrogen line needs a trap that returns the water to the reservoir rather than
					letting it collect in the tubing.
				</li>
			</ul>
		</div>
	</div>
</section>
