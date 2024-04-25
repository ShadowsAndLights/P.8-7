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
];


// Ajout de l'instruction const pour na pas changer les elts de la bannière et let pour faire évoluer les valeurs
  const bannerImg = document.querySelector(".banner-img");//queryselector va de l'interface Document retourne le premier Element dans le document correspondant au sélecteur/groupe de sélecteurs que j'auarais précisé
  const bannerText = document.querySelector("#banner p");
  const dotsContainer = document.querySelector(".dots");
  const arrowRight = document.querySelector(".arrow_right");
  const arrowLeft = document.querySelector(".arrow_left");
  let position = 0;
  let dots = [];



// Pour éviter d'avoir trois blocs de point j'utilise cette fonction pour les créer (<div class="dots"></div>)
  slides.forEach(function()  {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });