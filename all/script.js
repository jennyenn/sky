document.addEventListener('DOMContentLoaded', () => {

	function createShapeAnimation(topElement, bottomElement,textElement, colors, texts, locationElement, location) {
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
		  
		  textElement.textContent = texts[currentGradient];
		  locationElement.textContent = location[currentGradient];

		  isTopVisible = !isTopVisible;
		}, 3000);
	  }

	  const squareColors = [
		'linear-gradient(to top, #8F8E99, #D5C6BF, #DAD2CF, #82A4BF)',
		'linear-gradient(to top, #70768C, #E69F96, #D4DFE4, #7D91A9)',
		'linear-gradient(to top, #D3D3C6, #CBDEE1, #A8D1F1, #5B87C6)',
		'linear-gradient(to top, #FCE26D, #212B41, #070C18, #00000C)',
		'linear-gradient(to top, #FFEEA3, #F3DDBE, #9BCBF2, #90BFF1)',
		'linear-gradient(to top, #CBD0C0, #C5D7D3, #B7D8E1, #6A9FDD)',
		'linear-gradient(to top, #E0C8AC, #EEE7BD, #73838D, #73838D)',
		'linear-gradient(to top, #E9E8C6, #ABB4B3, #96C2E5, #9BA0A5)',
		'linear-gradient(to top, #839494, #C9CFC4, #8FA4AD, #A4A9A7)',
		'linear-gradient(to top, #FFF1D0, #E5E8E3, #C9D6E4, #9FB5D6)'
	];

	const squareTexts =[
		'2024-12-01	4:19 PM',
		'2024-11-30	4:28 PM',
		'2024-11-27	3:09 PM',
		'2024-11-26	5:17 PM',
		'2024-11-26	4:05 PM',
		'2024-11-25	7:50 AM',
		'2024-11-24	3:56 PM',
		'2024-11-24	3:08 PM',
		'2024-11-24	1:17 PM',
		'2024-11-23	4:23 PM'
	];

	const locationTexts =[
		'Jersey City (home)',
		'Jersey City (home)',
		'Jersey City (home)',
		'Central Park',
		'Time Square',
		'Jersey City (home)',
		'Jersey City (home)',
		'Jersey City (home)',
		'Jersey City (home)',
	];

	const shapes = [
		'shape-oval', 
		'shape-half-circle', 
		'shape-square', 
		'shape-diamond',
		'shape-circle',
		'shape-square', 
		'shape-pentagon', 
		'shape-waterdrop', 
		'shape-half-circle', 
		'shape-circle', 
	];

	const shapeTexts = [
		'Calm', 
		'Tired', 
		'Neutral', 
		'Grateful',
		'Happy',
		'Neutral',
		'Anxious',
		'Sad',
		'Tired',
		'Happy',
	];


	const topsquare = document.querySelector('.top');
	const bottomsquare = document.querySelector('.bottom');
	const gradientText = document.querySelector('.gradient_text');
	const locationText = document.querySelector('.location_text');

	createShapeAnimation(topsquare, bottomsquare, gradientText, squareColors, squareTexts,locationText, locationTexts);

	const cursor = document.querySelector('.cursor');
	const text = document.querySelector('.text');
	let currentShapeIndex = 0;

	document.addEventListener('mousemove', (event) => {
				cursor.style.left = `${event.clientX}px`;
				cursor.style.top = `${event.clientY}px`;
				text.style.left = `${event.clientX}px`;
				text.style.top = `${event.clientY}px`;
			});

			// 每三秒改變幾何形狀和文字
			setInterval(() => {
				// 移除當前形狀
				cursor.classList.remove(shapes[currentShapeIndex]);
				// 更新到下一個形狀
				currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
				// 添加新形狀
				cursor.classList.add(shapes[currentShapeIndex]);
				// 更新文字
				text.textContent = shapeTexts[currentShapeIndex];
			}, 3000);



});