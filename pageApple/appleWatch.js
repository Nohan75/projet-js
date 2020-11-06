// Stock tout les li avec la class nav-button
const awButton = document.querySelectorAll('li.nav-button');

// Stock tout les éléments avec la class card
const eHidden = document.querySelectorAll('.card');

// La flèche de retour vers le menu
const leftArrow = document.getElementById('prevPage');

// Stock le lien de la page actuelle
let pageTarget = window.location.href;

// Ajoute un élément url dans le cache et lui assigne le lien de la page actuelle
localStorage.setItem('url', pageTarget);


// Ecoute le click sur la flèche et redirige vers l'accueil si il est cliqué
leftArrow.addEventListener('click', () => {
    window.location.href = '../main.html';
});


awButton.forEach(button => {
    // Ecoute le click pour chaque bouton et donne la class isActive
    button.addEventListener('click', () => {
        // Supprime tout les éléments avec la class isActive pour qu'il n'y en ai qu'un
        awButton.forEach(element => element.classList.remove('isActive'));
        button.classList.add('isActive');
    });
});

awButton.forEach(button => {
    button.addEventListener('click', () => {
        eHidden.forEach(card => card.setAttribute('hidden', ''));
        // affiche les card selon l'id du bouton cliqué
        switch (button.id){
            case 'desc':
                eHidden[0].removeAttribute('hidden');
                break;
            case 'props':
                eHidden[1].removeAttribute('hidden');
                break;
            case 'color-button':
                eHidden[2].removeAttribute('hidden');
                break;
        }
    });
});
// Nombre d'apple watch ajouté au panier
let totalAw =0;

// Nombre actuelle d'apple watch dans le panier récupéré depuis le cache
let currentAw=localStorage.getItem('addAw');

// Si une valeur est déjà existante (parce que non null) on la récupère
if (parseInt(currentAw)>=1) {
    totalAw=parseInt(currentAw);
}
console.log(totalAw);

// Ecoute du click sur la page
window.addEventListener('click', addToCart)

// Ajoute un élément au panier
function addToCart(event) {
    if (event.target.id == 'add_cart') {
        totalAw++;
        localStorage.setItem('addAw', totalAw)
    }
}


// Bouton de sélection des couleurs
const colorButton = document.getElementsByClassName('color');

let selectImg = document.querySelector('img.watch-img');

// Fonction pour changer d'image lors d'un click sur un bouton correspondant
function changeImg() {
    for(let j = 0; j < colorButton.length; j++){
        // Ecoute le click pour chaque bouton
        colorButton[j].addEventListener("click", () => {
            switch (j){
                case 0:
                    // Change la source de l'image à afficher
                    selectImg.setAttribute('src', 'blackWatch.jpeg');
                    console.log('BLACK');
                    break;
                case 1:
                    selectImg.setAttribute('src', 'whiteWatch.jpeg');
                    console.log('WHITE');
                    break;
                case 2:
                    selectImg.setAttribute('src', 'redWatch.jpeg');
                    console.log('RED');
                    break;
            }
        });
    }
}
changeImg();

const prevChevron = document.getElementsByClassName('fa-chevron-left');
const nextChevron = document.getElementsByClassName('fa-chevron-right');

// Ecoute le click sur le chevron "suivant"
nextChevron[0].addEventListener("click", () => {

    // Fait défiler les images en changant la source
    switch (selectImg.getAttribute('src')){
        case 'blackWatch.jpeg':
            selectImg.setAttribute('src', 'whiteWatch.jpeg');
            break;
        case 'whiteWatch.jpeg':
            selectImg.setAttribute('src', 'redWatch.jpeg');
            break;
        case 'redWatch.jpeg':
            selectImg.setAttribute('src', 'blackWatch.jpeg');
            break;
    }
});

// Ecoute le click sur le chevron "précédent"
prevChevron[0].addEventListener("click", () => {

    switch (selectImg.getAttribute('src')){
        case 'blackWatch.jpeg':
            selectImg.setAttribute('src', 'redWatch.jpeg');
            break;
        case 'whiteWatch.jpeg':
            selectImg.setAttribute('src', 'blackWatch.jpeg');
            break;
        case 'redWatch.jpeg':
            selectImg.setAttribute('src', 'whiteWatch.jpeg');
            break;
    }
});