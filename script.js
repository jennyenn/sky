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

	// circle
	// circle
	// circle
	const circleColors = [
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


	// oval
	// oval
	// oval
	const ovalColors = [
		'linear-gradient(to top, #FFAF5A, #D6BD91, #B2AFA2, #91959B)',
		'linear-gradient(to top, #DFC1BA, #FFEBD7, #DFE9EA, #89AADA)',
		'linear-gradient(to top, #000000, #3E3A2F, #000000, #000000)',
		'linear-gradient(to top, #FFDA86, #D1D4CA, #9FB7CF, #5D81AF)',
		'linear-gradient(to top, #D4C9AD, #A09A95, #A8B1B2, #7D91A8)',
		'linear-gradient(to top, #A0A5A3, #435D82, #2D466D, #2E3253)',
		'linear-gradient(to top, #FADCB7, #FFF7E2, #BCD3E4, #8DAAD5)',
		'linear-gradient(to top, #99A0A8, #CFB3A8, #D9CFCD, #F1E8E3)',
		'linear-gradient(to top, #08295E, #002158, #001C51, #00194B)',
		'linear-gradient(to top, #EFAB6C, #FFD562, #CCC8C4, #9EA5B5)',
		'linear-gradient(to top, #AE9C80, #ABADA3, #919C9F, #48525C)',
		'linear-gradient(to top, #828699, #F5E2DD, #C0D5E3, #4D74AA)',
		'linear-gradient(to top, #FFBA48, #FFB664, #CCC3AF, #A9A9A5)'
	];


	// triangle
	// triangle
	// triangle
	const triangleColors = [
		'linear-gradient(to top, #EEBA99, #EDE5D3, #C5D3DF, #829CC3)',
		'linear-gradient(to top, #FAE1C3, #F1EBD8, #C4C9C7, #99A7B4)',
		'linear-gradient(to top, #989A97, #FFCD91, #919B9F, #FFE0A3)',
		'linear-gradient(to top, #7B8B94, #FFB195, #BDC4C1, #FFFDCA)',
		'linear-gradient(to top, #BBBFBE, #B8C8D1, #7C99C3, #466295)',
		'linear-gradient(to top, #FFD97F, #FFE3AA, #DBC8A6, #A39D95)'
	];

	// rhombus
	// rhombus
	// rhombus
	const rhombusColors = [
		'linear-gradient(-45deg, #B99B88, #DEBD9B, #C5C2B8, #88A0B5)',
		'linear-gradient(-45deg, #EBBA91, #EDC9B9, #EFD8D9, #F6EFE7)',
		'linear-gradient(-45deg, #83AFE3, #7CA6DA, #759BD4, #678EC7)',
		'linear-gradient(-45deg, #D5D1C0, #C3CACA, #A0ADBD, #92A4B5)'
	];

	// waterdrop
	// waterdrop
	// waterdrop
	const waterdropColors = [
		'linear-gradient(to top, #D8C1A8, #E1CAAE, #FFF5D3, #DAD9CE)',
		'linear-gradient(to top, #C0D7E4, #D0E3EA, #E3F3F9, #ADD4FA)'
	];

	//	halfcircle
	//	halfcircle
	//	halfcircle
	const halfcircleColors = [
		'linear-gradient(to top, #E4D7C1, #CCD2D2, #9CBAD5, #487ABC)',
		'linear-gradient(to top, #FFD386, #C0BBB1, #7C868E, #7C868E)',
		'linear-gradient(to top, #5E87C7, #6B92D4, #709CE8, #6391E1)'
	];

	const topcircle = document.querySelector('.circle_top');
	const bottomcircle = document.querySelector('.circle_bottom');
	const topwaterdrop = document.querySelector('.waterdrop_top');
	const bottomwaterdrop = document.querySelector('.waterdrop_bottom');
	const topoval = document.querySelector('.oval_top');
	const bottomoval = document.querySelector('.oval_bottom');
	const toptriangle = document.querySelector('.triangle_top');
	const bottomtriangle = document.querySelector('.triangle_bottom');
	const toprhombus = document.querySelector('.rhombus_top');
	const bottomrhombus = document.querySelector('.rhombus_bottom');
	const tophalfcircle = document.querySelector('.half-circle_top');
	const bottomhalfcircle = document.querySelector('.half-circle_bottom');


	createShapeAnimation(topcircle, bottomcircle, circleColors);
	createShapeAnimation(topwaterdrop, bottomwaterdrop, waterdropColors);
	createShapeAnimation(topoval, bottomoval, ovalColors);
	createShapeAnimation(toptriangle, bottomtriangle, triangleColors);
	createShapeAnimation(toprhombus, bottomrhombus, rhombusColors);
	createShapeAnimation(tophalfcircle, bottomhalfcircle, halfcircleColors);

});