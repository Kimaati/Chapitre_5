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
	},
	{
		"image":"slide5.jpg",
		"tagLine":"Photo <span>d'un coucher de soleil sur une plage</span>"
	}
]

const imageElement = document.querySelector('#banner .banner-img')
const tagLineElement = document.querySelector('#banner p')
const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');
const dotsContainer = document.querySelector('.dots');

let currentSlideIndex = 0; // Ici, le chiffre indique le point de départ de notre diaporama. Sachant que 0 = slide1.jpg, 1 = slide2.jpg, 2 = slide3.jpg et ainsi de suite

while (dotsContainer.firstChild){
	dotsContainer.firstChild.remove() // On supprime les enfants avant d'ajouter de nouveaux bullet points via une boucle while
} for (let i = 0; i < slides.length; i++) { // Entrons en détail dans cette boucle for :
	// "let i = 0;" permet d'initialiser une variable "i" à 0. Ce qui permet de suivre chaque le nombre d'itération de la boucle
	// "i < slides.length;" Cette condition permet une continuité de la boucle. Du moment que "i" est inférieur à la longueur de "slides" alors la boucle continue
	// "i++" Ceci est l'expression d'incrémentation. Cela permet de passer à la slide suivante après chaque itération de "i" en l'augmentant de 1 
	const dot = document.createElement('span'); // Ici, nous créons un attribut "span" qui sera utilisé pour le bullet point
	dot.classList.add('dot'); // Nous ajoutons la classe ".dot" au "span"
	if (i === currentSlideIndex){ // Ici, si i est égale à la slide actuel alors nous ajoutons la classe ".dot_selected" pour indiquer sur qu'elle slide nous sommes
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot); // Ici, nous ajoutons chaque bullet points à ".dots_container" pour dynamiser les bullets points en fonction du nombre de diapositives dans le tableau
}


suivant.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex +1) % slides.length; // "% slides.length" nous permet d'avoir une boucle continue sur nos diapositives. Passant de la première à la dernière et vice versa
	updateImageAndTagLine();
});


precedent.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex -1 + slides.length) % slides.length // Ici, nous ajoutons "slides.length" dans la parenthèse pour nous assurer qur même si "currentSlideIndex" est égale à 0 et que nous soustrayons -1, nous obtenons quand même un résultat positif. Ensuite, le "% slides.length" nous permet d'avoir la boucle
	updateImageAndTagLine();
})

function updateImageAndTagLine() { // Ici, nous avons la fonction responsable à la mise à jour des éléments ci-dessus
	const currentSlide = slides[currentSlideIndex]; // Nous récupérons la diapositive actuelles à partir du tableau "slides"
	imageElement.src = `./assets/images/slideshow/${currentSlide.image}` // Nous mettons à jour le chemin de l'image en fonction de la diapositive séléctionnée
	tagLineElement.innerHTML = currentSlide.tagLine; // Nous mettons à jour le contenu de la balise "p" 

	const dots = dotsContainer.querySelectorAll('.dot'); // Ici, nous sélectionnons tout les éléments avec la classe ".dot" à l'intérieur de l'élément "dotsContainer". Cela renvoie une liste de tous les éléments que nous stockons dans la variable "dots"
	dots.forEach((dot, index) => { // Nous utilisons "forEach" pour itérer sur chaque éléments de la liste "dots". La fonction reçoit deux arguments : "dot" qui est l'élément actuel de la liste et "index" qui représente l'index de cet élément dans la liste
		if (index === currentSlideIndex){ // Ici, nous vérifions que l'index de l'élément vu ci-dessus correspond à la slide actuelle
			dot.classList.add('dot_selected'); // Si oui, nous ajoutons la classe "dot_selected"
		} else {
			dot.classList.remove('dot_selected'); // Si non, nous la retirons
		}
	});
	
}

const dots = dotsContainer.querySelectorAll('.dot');
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const clickedIndex = Array.from(dots).indexOf(dot); // Dans cette constante, "Array.from(dots)" convertit la liste des éléments "dots" en un tableau qui est utilisé par la méthode "indexOf(dot)" pour trouver l'index de l'élément "dot"
        currentSlideIndex = clickedIndex; // Ici, la variable "currentSlideIndex" est mise à jour avec la valeur de "clickedIndex" ce qui modifie la diapositive actuel pour matcher avec le bullet point
        updateImageAndTagLine(); // Nous rappelons la fonction pour mettre à jour l'image et le texte en fonction de "currentSlideIndex"
    });
});