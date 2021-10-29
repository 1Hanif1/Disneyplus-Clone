'use strict';
const carouselContainer = document.querySelector('.carousel-items');
const carouselImages = document.querySelectorAll('.carousel-items img');
const leftBtn = document.querySelector('.prevBtn');
const rightBtn = document.querySelector('.nextBtn');
const imgWidth = carouselImages[0].clientWidth;
let carouselCounter;

window.addEventListener('load', () => {
	console.log(visualViewport.width);
	carouselCounter = 1;
	carouselContainer.style.transform = `translateX(${
		-imgWidth * carouselCounter + (visualViewport.width < 1024 ? 10 : 60)
	}px)`;
});

leftBtn.addEventListener('click', () => {
	carouselCounter =
		carouselCounter === 0 ? carouselImages.length - 1 : --carouselCounter;

	carouselContainer.style.transform = `translateX(${
		-imgWidth * carouselCounter + (visualViewport.width < 1024 ? 10 : 60)
	}px)`;
});

rightBtn.addEventListener('click', () => {
	carouselCounter =
		carouselCounter === carouselImages.length - 1 ? 0 : ++carouselCounter;

	console.log(carouselCounter);
	carouselContainer.style.transform = `translateX(${
		-imgWidth * carouselCounter + (visualViewport.width < 1024 ? 10 : 60)
	}px)`;
});
