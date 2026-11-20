// Process page: scrolling through the tall section moves every sky
// from its photo, to its colors, to its mood shape.
document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const scroller = document.querySelector('.scroller');
	const buttons = [...document.querySelectorAll('.steps button')];
	const lines = [...document.querySelectorAll('.steps .line')];
	const hint = document.querySelector('.hint');
	const order = ['photos', 'colors', 'shapes'];

	const skies = [...SKY_DATA].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
	grid.innerHTML = skies.map((s, k) => {
		const g = `linear-gradient(to top, ${s.colors.join(', ')})`;
		return `<div class="tile" style="--d:${k * 8}ms">
			<div class="pic" role="img" aria-label="Sky on ${s.date}, ${s.location}" style="background-image:url(../asset/${s.img})"></div>
			<div class="grad" style="background:${g}"></div>
			<div class="box" aria-label="${s.mood}"><div class="shape ${s.mood.toLowerCase()}" style="background:${g}"></div></div>
		</div>`;
	}).join('');

	let current = '';
	function setStep(step) {
		if (step === current) return;
		current = step;
		grid.dataset.step = step;
		const idx = order.indexOf(step);
		buttons.forEach((b, k) => {
			if (k === idx) b.setAttribute('aria-current', 'step');
			else b.removeAttribute('aria-current');
			b.classList.toggle('done', k < idx);
		});
	}

	// 0 at the top of the section, 1 at the end
	function progress() {
		const range = scroller.offsetHeight - innerHeight;
		const y = scrollY - scroller.offsetTop;
		return Math.min(Math.max(y / range, 0), 1);
	}

	function update() {
		const p = progress();
		setStep(p < 1 / 3 ? 'photos' : p < 2 / 3 ? 'colors' : 'shapes');
		// Lines fill as you scroll toward the next step
		lines.forEach((line, k) => {
			const fill = Math.min(Math.max((p - k / 3) * 3, 0), 1);
			line.style.setProperty('--fill', fill);
		});
		hint.classList.toggle('gone', p > 0.04);
	}

	// Clicking a step scrolls to it
	buttons.forEach((b, k) => b.addEventListener('click', () => {
		const range = scroller.offsetHeight - innerHeight;
		// Middle of that step's third of the section (top of it for Photos)
		const target = scroller.offsetTop + (k === 0 ? 0 : range * (k / 3 + 1 / 6));
		window.scrollTo({ top: target, behavior: 'smooth' });
	}));

	addEventListener('scroll', update, { passive: true });
	addEventListener('resize', update);
	update();
});
