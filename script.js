document.addEventListener('DOMContentLoaded', () => {

	function createShapeAnimation(topElement, bottomElement, colors) {
		let currentGradient = 0;
		let isTopVisible = true;
	
		setInterval(() => {
		  currentGradient = (currentGradient + 1) % colors.length;
	
		  if (isTopVisible) {
			bottomElement.style.background = colors[currentGradient];
			bottomElement.style.opacity = 1;
			topElement.style.opacity = 0;
		  } else {
			topElement.style.background = colors[currentGradient];
			topElement.style.opacity = 1;
			bottomElement.style.opacity = 0;
		  }
	
		  isTopVisible = !isTopVisible;
		}, 3100);
	  }

	  const squareColors = [
		'linear-gradient(to top, #97A199, #7E969E, #B2B2B0, #B0AEAA)',
		'linear-gradient(to top, #FFA621, #EB721C, #715040, #646464)',
		'linear-gradient(to top, #000000, #4A3F33, #000000, #000000)',
		'linear-gradient(to top, #D9B9AB, #E7D1B9, #E7E5D8, #94B8E5)',
		'linear-gradient(to top, #CADEE3, #BCE1F7, #82C0FF, #5C94E1)',
		'linear-gradient(to top, #86A8E0, #5D7DA9, #869FC5, #274980)',
		'linear-gradient(to top, #ABC1C9, #FFF0C5, #D9D1C1, #98A7B3)',
		'linear-gradient(to top, #CDEAFF, #CDEAFF, #7B9BD3, #4F72B1)',
		'linear-gradient(to top, #DEF6FF, #C3D9F4, #F2DBD7, #7692B6)'
	];

	const topsquare = document.querySelector('.top');
	const bottomsquare = document.querySelector('.bottom');

	createShapeAnimation(topsquare, bottomsquare, squareColors);

});