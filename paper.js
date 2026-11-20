// Page flip direction. Load this in <head> on every page.
// Back links (data-back) and the browser's back button turn the page the other way.
document.addEventListener('click', (e) => {
	if (e.target.closest('a[data-back]')) sessionStorage.setItem('flip', 'back');
});

addEventListener('pagereveal', (e) => {
	let back = sessionStorage.getItem('flip') === 'back';
	sessionStorage.removeItem('flip');
	try {
		const act = navigation.activation;
		if (act && act.navigationType === 'traverse' && act.from && act.entry) {
			back = act.entry.index < act.from.index;
		}
	} catch (err) { /* Navigation API not available */ }
	if (back && e.viewTransition) e.viewTransition.types.add('back');
});
