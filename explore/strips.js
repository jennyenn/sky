// Builds the sky strips for home-d / home-e.
// data-direction on .strips: "rows" (horizontal bars) or "columns" (vertical bars).
document.addEventListener('DOMContentLoaded', () => {
	const wrap = document.querySelector('.strips');
	const caption = document.querySelector('.caption');
	const rows = wrap.dataset.direction === 'rows';
	const skies = [...SKY_DATA].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
	const fmt = (d) => new Date(d + 'T12:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

	skies.forEach((s) => {
		const el = document.createElement('a');
		el.className = 'strip';
		el.href = '../introduction/index.html';
		el.style.background = `linear-gradient(${rows ? 'to right' : 'to top'}, ${s.colors.join(', ')})`;
		el.setAttribute('aria-label', `${s.date}, ${s.location}, ${s.mood}`);
		el.addEventListener('mouseenter', () => { caption.textContent = `${fmt(s.date)} · ${s.location} · ${s.mood}`; });
		el.addEventListener('mouseleave', () => { caption.textContent = ''; });
		wrap.appendChild(el);
	});

	// Month labels under vertical strips, placed at the first sky of each month
	const months = document.querySelector('.months');
	if (months) {
		let last = '';
		let lastPos = -1;
		skies.forEach((s, k) => {
			const m = new Date(s.date + 'T12:00').toLocaleDateString('en-US', { month: 'short' });
			const pos = k / skies.length;
			if (m !== last && pos - lastPos > 0.06) {
				const span = document.createElement('span');
				span.textContent = m;
				span.style.left = (pos * 100) + '%';
				months.appendChild(span);
				lastPos = pos;
			}
			last = m;
		});
	}
});
