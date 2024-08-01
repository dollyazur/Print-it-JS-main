const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    alt: "image d'une presse rotative imprimant un document",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    alt: "image de personnes travaillant dans un bureau en open-space",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    alt: "image de palettes de couleurs papier",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    alt: "diverses images d'autocollants sur fond jaune",
  },
];

//Phase d'initialisation

//on crée une variable pour dire où l'on se trouve dans le tableau
let position = 0;

//on stocke le chemin qui permet d'accéder au dossier où sont rangées les images
let cheminImage = "./assets/images/slideshow/";

//On récupère tous nos éléments dans le DOM (dans le HTML)

//D'abord on récupère la flèche gauche
let arrowLeft = document.querySelector(".arrow_left");
//j'affiche mon élément
console.log(arrowLeft);

//Ensuite on récupère la flèche droite
let arrowRight = document.querySelector(".arrow_right");
//j'affiche mon élément
console.log(arrowRight);

//On récupère l'image du slider
let bannerImage = document.querySelector(".banner-img");
//j'affiche mon élément
console.log(bannerImage);

//il faut ensuite récupérer la tagline
let tagLine = document.querySelector(".tagLine");
console.log(tagLine);

//Fin de l'initialisation

//Maintenant nous passons aux écouteurs d'évènements pour détecter le clic de l'utilisateur

//Là, l'utilisateur clique sur la flèche gauche
arrowLeft.addEventListener("click", function () {
  console.log("gauche");

  //je crée la variable pour le nom de l'ancien dot
  let ancienDotNom = "dot" + position; //dot0
  console.log(ancienDotNom); //dot0
  let ancienDotDom = document.getElementById(ancienDotNom);
  console.log(ancienDotDom);

  if (position == 0) {
    //le == permet de comparer la valeur de notre variable à une autre valeur
    //ici on va devoir gérer un problème : que position n'ai pas la valeur -1
    position = slides.length - 1;
    console.log("la nouvelle valeur de position est " + position);
  } else {
    //ici pas de problème, position sera positif, le comportement de notre algorithme est normal
    //je décrémente la position de la slide
    position = position - 1;
  }

  //je crée la variable pour le nom du nouveau dot
  let nouveauDotNom = "dot" + position; //dot-1
  console.log(nouveauDotNom); //dot-1
  //je récupère le dot dans le dom grace au nom
  let nouveauDotDom = document.getElementById(nouveauDotNom);
  console.log(nouveauDotDom);

  //je change l'image en récupérant la valeur de la ligne "image" de mon tableau et en modifiant le src de ma bannerImage
  bannerImage.setAttribute("src", cheminImage + slides[position]["image"]);
  console.log(position);
  bannerImage.setAttribute("alt", slides[position]["alt"]);
  //je change le texte avec tagLine.innerHTML = position
  tagLine.innerHTML = slides[position]["tagLine"];
  console.log(tagLine);

  //je change la position du dot en enlevant la classe sur l'ancien dot
  ancienDotDom.classList.remove("dot_selected");
  //je rajoute la classe sur le nouveau dot
  nouveauDotDom.classList.add("dot_selected");
});

//Là, l'utilisateur clique sur la flèche droite
arrowRight.addEventListener("click", function () {
  console.log("droite");

  //je crée la variable pour le nom de l'ancien dot
  let ancienDotNom = "dot" + position; //dot0
  console.log(ancienDotNom); //dot0
  let ancienDotDom = document.getElementById(ancienDotNom);
  console.log(ancienDotDom);

  if (position == slides.length - 1) {
    //ici on va devoir gérer un problème : que position n'ai pas la valeur 4
    position = 0;
    console.log("la nouvelle valeur de position est " + position);
  } else {
    //ici pas de problème, position sera compris entre 0 et 3, le comportement de notre algorithme est normal
    //j'incrémente la position de la slide
    position = position + 1;
  }

  //je crée la variable pour le nom du nouveau dot
  let nouveauDotNom = "dot" + position; //dot1
  console.log(nouveauDotNom); //dot1
  //je récupère le dot dans le dom grace au nom
  let nouveauDotDom = document.getElementById(nouveauDotNom);
  console.log(nouveauDotDom);

  //je change l'image en récupérant la valeur de la ligne "image" de mon tableau et en modifiant le src de ma bannerImage
  bannerImage.setAttribute("src", cheminImage + slides[position]["image"]);
  console.log(position);

  //je change le texte alternatif de la même manière en modifiant la alt de ma bannerImage
  bannerImage.setAttribute("alt", slides[position]["alt"]);

  //je change le texte avec tagLine.innerHTML = position
  tagLine.innerHTML = slides[position]["tagLine"];
  console.log(tagLine);

  //je change la position du dot en enlevant la classe sur l'ancien dot
  ancienDotDom.classList.remove("dot_selected");
  //je rajoute la classe sur le nouveau dot
  nouveauDotDom.classList.add("dot_selected");
});
