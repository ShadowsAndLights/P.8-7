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
  const bannerImg = document.querySelector(".banner-img");//queryselector va de l'interface Document retourne le premier Element dans le document correspondant au sélecteur/groupe de sélecteurs que j'aurais précisé
  const bannerText = document.querySelector("#banner p");
  const dotsBox = document.querySelector(".dots");
  const arrowRight = document.querySelector(".arrow_right");
  const arrowLeft = document.querySelector(".arrow_left");
  let position = 0; //Déclaration de la variable
  let dots = [];


      // Création des blocs div 'dots"'
// Pour éviter d'avoir trois blocs de point dans HTML j'utilise cette fonction pour les créer (<div class="dots"></div>)
    slides.forEach(function() {

    let dot = document.createElement("div");
      
    dotsBox.appendChild(dot);
    dot.classList.add("dot"); //Ajout de la classe spécifiée. 
    dots.push(dot);
    });


     // Eventlistener
// Ajout des événements d'écoute pour flèche gauche et ajout de console.log pour tester eventlistener
  arrowLeft.addEventListener("click", function() {
    ArrowClic(-1);
    console.log("Clic sur le bouton de gauche");
    console.log(position);
  });  

// Ajout des événements d'écoute pour flèche droite et ajout de console.log pour tester eventlistener
  arrowRight.addEventListener("click", function() {
    ArrowClic(1);
    console.log("Clic sur le bouton de droite");
    console.log(position);
  });

// Quand on clique sur un des 4 points on a changement de points
  dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
      position = index;
      updateDots();
      changeSlide();
    });
  });




    // Points pleins ajoutés et liaison à chaque image
// Dès qu'on clique sur un point celui-ci est plein précisant qu'il est sélectionné
    function updateDots() {
    dots.forEach(function(dot, index) {//fonction pour indexer automatiqement et répeter les points sélectionnés
      dot.classList.remove("dot_selected");
      if (index === position) {
        dot.classList.add("dot_selected");
      }
    });
  }

// Fonction pour changer l'image et le texte
  function changeSlide() {
    bannerImg.src = "./assets/images/slideshow/" + slides[position].image;
    bannerText.innerHTML = slides[position].tagLine;
  }


    // Ajout des fonctions pour pouvoir naviguer en cliquant sur les flèches
// Définition de la direction des flèches quand on clique dessus
  function ArrowClic(direction) {
    position += direction;
    updatePosition();
    updateDots();
    changeSlide();
  }

// Si je clique sur une des flèches je peux naviguer sur l'intervalle définit plus haut (-1,+1)
  function updatePosition() {
    if (position >= slides.length) { //Si la position est plus grande ou inférieur que le nombre de slides je serais équivalent à (0) ou à (-1) c-à-d que je boucle le défilement
      position = 0;    
    } else if (position < 0) {
      position = slides.length - 1;
    }
  }



  






