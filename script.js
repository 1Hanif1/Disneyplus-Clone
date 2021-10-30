'use strict';
let carouselCounter;
const carouselContainer = document.querySelector('.carousel-items');
const carouselImages = document.querySelectorAll('.carousel-items img');
const leftBtn = document.querySelector('.prevBtn');
const rightBtn = document.querySelector('.nextBtn');
const imgWidth = carouselImages[0].clientWidth;
const carouselDots = document.querySelector('.dot-container');

window.addEventListener('load', () => {
	console.log(visualViewport.width);
	carouselCounter = 1;
	updateCarousel();
	addDots();
	updateDots();
});

setInterval(() => {
	carouselCounter =
		carouselCounter === carouselImages.length - 1 ? 0 : ++carouselCounter;

	updateCarousel();
	updateDots();
}, 2000);

leftBtn.addEventListener('click', () => {
	carouselCounter =
		carouselCounter === 0 ? carouselImages.length - 1 : --carouselCounter;

	carouselContainer.style.transform = `translateX(${
		-imgWidth * carouselCounter + (visualViewport.width < 1024 ? 10 : 60)
	}px)`;

	updateDots();
});

rightBtn.addEventListener('click', () => {
	carouselCounter =
		carouselCounter === carouselImages.length - 1 ? 0 : ++carouselCounter;

	console.log(carouselCounter);
	carouselContainer.style.transform = `translateX(${
		-imgWidth * carouselCounter + (visualViewport.width < 1024 ? 10 : 60)
	}px)`;

	updateDots();
});

const addDots = function () {
	const html = `<div class="dot"></div>`;
	carouselImages.forEach((_) =>
		carouselDots.insertAdjacentHTML('afterbegin', html)
	);
};

const updateDots = function () {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot) => (dot.style.backgroundColor = 'hsla(0, 0%, 100%, 0.5)'));
	dots[carouselCounter].style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
};
function updateCarousel() {
	carouselContainer.style.transform = `translateX(${
		-imgWidth * carouselCounter + (visualViewport.width < 1024 ? 10 : 60)
	}px)`;
}
