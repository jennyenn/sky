document.addEventListener('DOMContentLoaded', () => {
	const circle = document.querySelector('.circle_shape');
	if (!circle) {
	  console.error('Circle element not found!');
	  return;
	}
  

const circlecolor = [
	'linear-gradient(to top, #FFF1D0, #E5E8E3, #C9D6E4, #9FB5D6)',
	'linear-gradient(to top, #87CCFF, #4E8CE9, #3A72CA, #3770C7)',
	'linear-gradient(to top, #B9AFA5, #D1D7CD, #A1CFF8, #75AEF5)',
	'linear-gradient(to top, #FFBA4B, #BBA171, #858470, #363A3B)'
];

let currentGradient =0;

setInterval(()=>{
	currentGradient = (currentGradient+1) % circlecolor.length;
	circle.style.background = circlecolor[currentGradient];
}, 3000);

});