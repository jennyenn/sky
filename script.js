document.addEventListener('DOMContentLoaded', () => {
	const topcircle = document.querySelector('.top');
	const bottomcircle = document.querySelector('.bottom');
  

const circlecolor = [
	'linear-gradient(to top, #FFF1D0, #E5E8E3, #C9D6E4, #9FB5D6)',
	'linear-gradient(to top, #87CCFF, #4E8CE9, #3A72CA, #3770C7)',
	'linear-gradient(to top, #B9AFA5, #D1D7CD, #A1CFF8, #75AEF5)',
	'linear-gradient(to top, #FFBA4B, #BBA171, #858470, #363A3B)',
	'linear-gradient(to top, #D2A764, #BDC492, #6CB6D0, #3389C2)',
	'linear-gradient(to top, #B4B1A9, #B4BBB9, #9EB1C0, #87A2BF)',
	'linear-gradient(to top, #D1681C, #F57510, #FEBF2C, #AC8F5F)',
	'linear-gradient(to top, #FFEC9C, #FDF3D7, #E6E8E5, #C0D1E2)',
	'linear-gradient(to top, #EBD6BD, #6B7C91, #FFBD6E, #927063)',
	'linear-gradient(to top, #DAD8E2, #E5E3E8, #B0D2E6, #E3E1E7)',
	'linear-gradient(to top, #E0CCA0, #E9E3B6, #DBBF9F, #485874)',
	'linear-gradient(to top, #9FBDD3, #B7BDCB, #D6D4D7, #C1C0CA)',
	'linear-gradient(to top, #52565B, #968F81, #5C5D5A, #998E7B)',
	'linear-gradient(to top, #F5FDF8, #FFDEBD, #CFDEE7, #ADBED3)',
	'linear-gradient(to top, #FFCD5E, #F3DDBB, #AAAAAA, #768290)'
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