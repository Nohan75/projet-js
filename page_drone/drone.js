// Permet de listen un evenement sur window (la page web), ici on écoute un click puis on appel la fonction "unhideDescription"
window.addEventListener('click', unhideDescription);

// On stock dans une variable (sous forme de tableau) toutes les informations des bouttons qui ont la class 'product'
const buttonProduct = document.getElementsByClassName('product');
console.log("===================")
console.log(buttonProduct);


const hideImg = document.getElementsByClassName('image');
console.log(hideImg);

// hideDescription recupere sous forme de tableau toutes les descriptions
const hideDescription = document.getElementsByClassName('description');
console.log(hideDescription);

// La fonctions prend en parametre le 'click' de window.addEventListener et les informations renvoyer 
function unhideDescription(event) {
    // le console.log renvoie ce que le window.addEventListener à récuperer
    console.log(event);
    // Le switch permet d'afficher en fonction de event.target.value que l'on a récuperer et on ne garde que 
    // le event.target.value qui est la value attribuer au bouton dans le html
    switch (event.target.value) {
        case 'description1':
            console.log("toto");
            console.log("__________");
            // on demande a la case 0 du tableau d'inverser son status hidden qui correspond a la description1 
            hideDescription[0].toggleAttribute('hidden');
            hideImg[0].toggleAttribute('hidden');
            break;
        case 'description2':
            console.log("tata");
            hideDescription[1].toggleAttribute('hidden');
            hideImg[1].toggleAttribute('hidden');
            break;
        case 'description3':
            console.log("ok");
            hideDescription[2].toggleAttribute('hidden');
            hideImg[2].toggleAttribute('hidden');
            break;
        default:
            break;
    }
}

// Pour le panier 

let totalDJI = 0;
let totalMavic = 0;
let totalCanon = 0;


let currentDJI=localStorage.getItem('dji');
if (parseInt(currentDJI)>=1) {
    totalDJI=parseInt(currentDJI);
}

let currentMavic=localStorage.getItem('mavic');
if (parseInt(currentMavic)>=1) {
    totalMavic=parseInt(currentMavic);
}

let currentCanon=localStorage.getItem('canon');
if (parseInt(currentCanon)>=1) {
    totalCanon=parseInt(currentCanon);
}

window.addEventListener('click', addToCart)

function addToCart(event) {
    if (event.target.id == 'add_cart_dji') {
        totalDJI = totalDJI + 1;
        localStorage.setItem('dji', totalDJI)
    } else if (event.target.id == 'add_cart_mavic') {
        totalMavic = totalMavic + 1;
        localStorage.setItem('mavic', totalMavic)
        console.log('MAVIC');
    } else if (event.target.id == 'add_cart_canon') {
        totalCanon = totalCanon + 1;
        localStorage.setItem('canon', totalCanon)
        console.log('CANON');
    }
}


const leftArrow = document.getElementById('prevPage');
let pageTarget = window.location.href;

localStorage.setItem('url', pageTarget);
leftArrow.addEventListener('click', () => {
    window.location.href = '../main.html';
});
