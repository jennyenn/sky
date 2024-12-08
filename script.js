document.addEventListener('DOMContentLoaded', () => {
	const topcircle = document.querySelector('.top');
	const bottomcircle = document.querySelector('.bottom');
  

const circlecolor = [
	'linear-gradient(to top, #FFF1D0, #E5E8E3, #C9D6E4, #9FB5D6)',
	'linear-gradient(to top, #87CCFF, #4E8CE9, #3A72CA, #3770C7)',
	'linear-gradient(to top, #B9AFA5, #D1D7CD, #A1CFF8, #75AEF5)',
	'linear-gradient(to top, #FFBA4B, #BBA171, #858470, #363A3B)'
];

let currentGradient = 0;
let isTopVisible = true;

setInterval(() => {
	currentGradient = (currentGradient + 1) % circlecolor.length;
	
	if (isTopVisible) {
		bottomcircle.style.background = circlecolor[currentGradient];
		bottomcircle.style.opacity = 1;
		topcircle.style.opacity = 0;
	}else {
		topcircle.style.background = circlecolor[currentGradient];
		topcircle.style.opacity = 1;
		bottomcircle.style.opacity = 0;
	}

	isTopVisible = !isTopVisible;
}, 3000);

});