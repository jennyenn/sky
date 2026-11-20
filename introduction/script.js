// "my datas" popup: builds the table from SKY_DATA (data.js) the first time it opens
document.addEventListener('DOMContentLoaded', () => {
	const dialog = document.querySelector('.data-dialog');
	const openBtn = document.querySelector('.data-open');
	const closeBtn = document.querySelector('.data-close');
	const tbody = dialog.querySelector('tbody');
	let built = false;

	function buildTable() {
		const rows = SKY_DATA.map((d) => {
			const swatches = d.colors
				.map((c) => `<span class="swatch" style="background:${c}" title="${c}"></span>`)
				.join('');
			const photo = d.img
				? `<img src="../asset/${d.img}" alt="Sky on ${d.date}, ${d.location}" loading="lazy">`
				: '';
			return `<tr>
				<td class="num">${d.n}</td>
				<td class="photo">${photo}</td>
				<td>${d.date}</td>
				<td>${d.time}</td>
				<td>${d.location}<span class="country">${d.country}</span></td>
				<td><div class="swatches">${swatches}</div></td>
				<td class="mood">${d.mood}</td>
			</tr>`;
		});
		tbody.innerHTML = rows.join('');
		dialog.querySelector('.data-count').textContent = `${SKY_DATA.length} skies, 2024`;
		built = true;
	}

	openBtn.addEventListener('click', () => {
		if (!built) buildTable();
		dialog.showModal();
	});

	closeBtn.addEventListener('click', () => dialog.close());

	// Click outside the panel closes it
	dialog.addEventListener('click', (e) => {
		if (e.target === dialog) dialog.close();
	});
});
