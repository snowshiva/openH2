<svelte:head>
	<title>About | openH2</title>
	<meta
		name="description"
		content="The story behind openH2: quitting smoking, a slow recovery, and building hydrogen therapy from scratch."
	/>
</svelte:head>

<section class="mx-auto max-w-3xl px-4">
	<h1 class="text-3xl font-bold tracking-tight md:text-4xl">About openH2</h1>

	<div class="text-muted-foreground mt-8 space-y-6 text-lg leading-relaxed">
		<p>
			I'm Norbu Snow-Shiva, a software engineer and natural medicine enthusiast. I built openH2 to
			share my journey exploring hydrogen therapy. I am not a medical professional, and this
			information is not medical advice. I am sharing my personal experience and research to help
			others explore hydrogen generation in a safe and affordable way.
		</p>
		<p>
			I started my journey devouring videos on YouTube about electrolysis, mainly starting from
			videos by
			<a
				href="https://www.youtube.com/@Nighthawkinlight"
				target="_blank"
				rel="noopener noreferrer"
				class="link">Nighthawkinlight</a
			>. I started with his video here:
			<a
				href="https://www.youtube.com/watch?v=d85OX6yEwE0&t=984s"
				target="_blank"
				rel="noopener noreferrer"
				class="link break-words">https://www.youtube.com/watch?v=d85OX6yEwE0&t=984s</a
			>
		</p>
		<p>Many thanks to @Nighthawkinlight for his excellent content and for inspiring my journey.</p>
		<p>
			Though very informative, I quickly learned that stainless steel and a strong base electrolyte
			like KOH (potassium hydroxide) or NaOH (sodium hydroxide) can cause some major issues in
			practical use. For hobby experimentation it's fine, but for an appliance that is used daily, I
			found some real issues. Stainless steel breaks down pretty fast, and food safe plastic bottles
			and water bottles embrittle and crack very fast. Also, an unexpected danger: stainless steel
			in strong base electrolytes can create harmful compounds in electrolysis like hexavalent
			chromium, which is a known carcinogen and can cause severe health issues.
		</p>
		<p>
			I quit smoking, and I thought the hard part would be the quitting. It wasn't. The healing
			turned out to be slow and painful. My lungs hurt, I didn't know how much damage I had done,
			and I didn't know whether it would ever fully heal. There is a particular kind of
			powerlessness in that: waiting on your own body and not knowing.
		</p>
		<p>
			Rather than just wait, I decided to do something (read I hyperfixated on learning everything
			about electrolysis and how to safely make breathable hydrogen). I already knew about
			hydrogen's healing potential from a friend who uses hydrogen tablets, the kind that fizz into
			a glass of water, but tablets are an expensive and unsustainable way to get a daily therapy. I
			knew hydrogen could be made by electrolysis, and I wondered whether breathing it could be a
			better and more affordable route. So I set out to learn everything I could about hydrogen and
			electrolysis, because if I was going to do this, I was going to do it safely.
		</p>
		<p>
			I threw myself into the research: how to build electrolysis machines, which materials are safe
			and which quietly poison the gas, different electrolytes, different form factors. Two threads
			in the literature kept pulling me deeper. One is mitochondrial: hydrogen is small enough to
			reach inside the mitochondria where the most destructive radicals are made, and it appears to
			switch on the cell's own antioxidant machinery rather than just mopping up. The other is
			metabolic: hydrogen nudges the same fat-burning signals that fasting does, which makes
			ketogenesis come easier. A lot of that work is still animal work, and I say so plainly on the
			<a href="/research" class="link">research page</a>, but it was enough to make me want to try
			it properly. I compared the real options for hydrogen therapy, tablets, water machines, and
			inhalation, and building my own turned out to work better for me than any of them. Version
			after version, the design got simpler and better. By the sixth version it was good enough that
			I started using it on myself.
		</p>
		<p>
			The first days were not what I expected. For three days I felt worse: unexplainably tired,
			sleeping far more than usual. On the fourth day it turned, and I started feeling much better.
			On the fifth day I felt a mild euphoria, and meditation, which usually takes effort, came
			easily. I have practiced natural medicine most of my adult life, and I recognized the pattern
			of feeling worse before better. That experience is mine alone. It is a story, not a study, and
			I present it as exactly that. But it is why this project exists.
		</p>
		<p>
			Somewhere in those weeks the project stopped being only about repairing my lungs. Hydrogen is
			the first element, the smallest molecule, the most abundant thing in the universe, two-thirds
			of every drop of water. The more I learned, the more it seemed strange that access to it
			should run through expensive proprietary expensive machines.
		</p>
		<p>
			So this is openH2: everything I learned, documented properly and given away. The build plans
			are open source. The <a href="/safety" class="link">safety knowledge</a>, which materials,
			which electrolytes, what can go wrong and how to verify your own build, is published with the
			same care as the designs, because people will actually build these. The research is graded
			honestly, including where the evidence is thin. This is why I document: so the path is easier
			for the next person than it was for me.
		</p>
	</div>

	<div class="border-border mt-10 flex flex-wrap gap-4 border-t pt-8">
		<a href="/plans-and-parts" class="link"> See the plans </a>
		<a href="/research" class="link"> Read the research </a>
		<a href="/health-and-h2" class="link"> Health &amp; H₂ </a>
	</div>
</section>
