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
