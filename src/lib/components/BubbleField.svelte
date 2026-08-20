<script lang="ts">
	import { onMount } from 'svelte';

	type Bubble = {
		x: number;
		y: number;
		r: number;
		v: number;
		amp: number;
		freq: number;
		phase: number;
		amp2: number;
		freq2: number;
		phase2: number;
		alpha: number;
	};

	const R_MIN = 0.35;
	const R_MAX = 1.6;
	const BUCKETS = 12;

	let canvas: HTMLCanvasElement | undefined = $state();

	onMount(() => {
		const el = canvas;
		const ctx = el?.getContext('2d');
		if (!el || !ctx) return;

		const TAU = Math.PI * 2;
		const rand = (a: number, b: number) => a + Math.random() * (b - a);
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

		let w = 0;
		let h = 0;
		let bubbles: Bubble[] = [];
		let raf = 0;
		let last = 0;
		let color = '#3f9dd4';

		const readColor = () => {
			const v = getComputedStyle(document.documentElement).getPropertyValue('--bubble').trim();
			if (v) color = v;
		};

		const spawn = (y: number): Bubble => {
			// Biased toward the small end, so the field is mostly fine fizz with a
			// scattering of larger bubbles through it.
			const r = R_MIN + (R_MAX - R_MIN) * Math.pow(Math.random(), 2.6);
			return {
				x: rand(0, w),
				y,
				r,
				// Buoyancy: rise speed goes with the square of the radius, so the big
				// bubbles cross in ~7s while the fine ones drift up for ~20s.
				v: 34 + r * r * 35,
				// Two incommensurate sways sum into a wandering path that never
				// visibly repeats.
				amp: rand(2, 11),
				freq: rand(0.5, 1.5),
				phase: rand(0, TAU),
				amp2: rand(3, 16),
				freq2: rand(0.1, 0.4),
				phase2: rand(0, TAU),
				alpha: 0.35 + (r / R_MAX) * 0.65
			};
		};

		const draw = (t: number) => {
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = color;

			// Thousands of individual fills would be the bottleneck, so bubbles are
			// collected into a few opacity buckets and each bucket fills as one path.
			// Quantizing opacity this finely is invisible on translucent specks.
			const paths: Path2D[] = [];
			for (let i = 0; i < BUCKETS; i++) paths.push(new Path2D());

			for (const b of bubbles) {
				const x =
					b.x + Math.sin(t * b.freq + b.phase) * b.amp + Math.sin(t * b.freq2 + b.phase2) * b.amp2;
				const fade = Math.max(0, Math.min(1, b.y / (h * 0.18), (h - b.y) / (h * 0.08)));
				const a = b.alpha * fade;
				if (a <= 0) continue;
				const bucket = Math.min(BUCKETS - 1, (a * BUCKETS) | 0);
				const p = paths[bucket];
				p.moveTo(x + b.r, b.y);
				p.arc(x, b.y, b.r, 0, TAU);
			}

			for (let i = 0; i < BUCKETS; i++) {
				ctx.globalAlpha = (i + 0.5) / BUCKETS;
				ctx.fill(paths[i]);
			}
			ctx.globalAlpha = 1;
		};

		const frame = (now: number) => {
			const t = now / 1000;
			const dt = Math.min(t - last, 0.05);
			last = t;
			for (const b of bubbles) {
				b.y -= b.v * dt;
				if (b.y + b.r < 0) Object.assign(b, spawn(h + rand(0, 60)));
			}
			draw(t);
			raf = requestAnimationFrame(frame);
		};

		const stop = () => {
			if (raf) cancelAnimationFrame(raf);
			raf = 0;
		};

		const start = () => {
			if (raf) return;
			if (motion.matches) {
				draw(performance.now() / 1000);
				return;
			}
			last = performance.now() / 1000;
			raf = requestAnimationFrame(frame);
		};

		const resize = () => {
			// Ambient, out-of-focus art: capping DPR keeps the per-frame fill cheap
			// on high-density screens, and slight softness suits the effect.
			const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			w = window.innerWidth;
			h = window.innerHeight;
			el.width = Math.round(w * dpr);
			el.height = Math.round(h * dpr);
			el.style.width = `${w}px`;
			el.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(2100, Math.max(270, Math.round((w * h) / 870)));
			bubbles = Array.from({ length: count }, () => spawn(rand(0, h)));
			if (motion.matches || !raf) {
				stop();
				start();
			}
		};

		const onVisibility = () => (document.hidden ? stop() : start());
		const onMotionChange = () => {
			stop();
			start();
		};
		const themes = new MutationObserver(() => {
			readColor();
			if (motion.matches) draw(performance.now() / 1000);
		});

		readColor();
		resize();
		start();

		window.addEventListener('resize', resize);
		document.addEventListener('visibilitychange', onVisibility);
		motion.addEventListener('change', onMotionChange);
		themes.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		return () => {
			stop();
			window.removeEventListener('resize', resize);
			document.removeEventListener('visibilitychange', onVisibility);
			motion.removeEventListener('change', onMotionChange);
			themes.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="bubble-field" aria-hidden="true"></canvas>

<style>
	.bubble-field {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		opacity: var(--bubble-opacity);
	}
</style>
