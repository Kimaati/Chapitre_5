const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imageElement = document.querySelector('#banner .banner-img')
const tagLineElement = document.querySelector('#banner p')
const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');
const dotsContainer = document.querySelector('.dots');

let currentSlideIndex = 0;

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	if (i === currentSlideIndex){
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
}

suivant.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex +1) % slides.length;
	updateImageAndTagLine();
});


precedent.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex -1 + slides.length) % slides.length
	updateImageAndTagLine();
})

function updateImageAndTagLine() {
	const currentSlide = slides[currentSlideIndex];
	imageElement.src = `./assets/images/slideshow/${currentSlide.image}`
	tagLineElement.innerHTML = currentSlide.tagLine;
	const dots = dotsContainer.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === currentSlideIndex){
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
	
}

const dots = dotsContainer.querySelectorAll('.dot');
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const clickedIndex = Array.from(dots).indexOf(dot);
        currentSlideIndex = clickedIndex;
        updateImageAndTagLine();
    });
});