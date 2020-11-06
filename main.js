const myInput = document.querySelector('input');
const okButton = document.querySelector('button.ok');

okButton.addEventListener('click', save);

function save(){
    let cookie = myInput.value;
    localStorage.setItem('search', cookie);

    switch (cookie){
        case 'apple watch':
            window.location.href = 'pageApple/appleWatch.html';
            break;
        case 'drone':
            window.location.href = 'page_drone/drone.html';
            break;
        case 'phone':
            window.location.href = 'phone/phone.html';
            break;
    }
}

const cart = document.querySelector('i.fa-shopping-cart');
// card de la popup
const popupCart = document.querySelector('.card-panier');
// croix pour fermer le panier quand il est ouvert
const crossBack = document.querySelector('.cross-back');

let nbPhone = localStorage.getItem('addPhone');
let nbDJI = localStorage.getItem('dji');
let nbMavic = localStorage.getItem('mavic');
let nbCanon = localStorage.getItem('canon');
let nbAw = localStorage.getItem('addAw');
let nbDrone = localStorage.getItem('addDrone');

// Card gris clair avec tout les elements mis dans le panier
const panierContent = document.querySelector('.panier-content');
// tableau avec les produits du pannier 
const tablePanier = document.querySelector('.list-panier');

let elementInCard = toInt(nbDrone) + toInt(nbAw) + toInt(nbPhone) + toInt(nbDJI) + toInt(nbMavic) + toInt(nbCanon);

console.log(nbPhone);
console.log(nbAw);
console.log(nbDrone);
console.log(nbCanon);
console.log(nbMavic);
console.log(nbDJI);
console.log(nbDrone === null);

// 'load' écoute quand la page a fini de ce charger
window.addEventListener('load', () => {
    let total
    if(nbDrone === null || nbAw === null || nbPhone === null || nbDJI === null || nbMavic === null || nbCanon === null){
        total = toInt(nbDrone) + toInt(nbAw) + toInt(nbPhone) + toInt(nbDJI) + toInt(nbMavic) + toInt(nbCanon);
    }
    cart.innerHTML = total;
    
});


function toInt(nb){
    if(nb === null){
        nb = '0'
    }
    return parseInt(nb);
}

// '.clear' permet de clear le cache (local Storage)
const clearButton = document.querySelector('.clear');

// clear le cache et reload la page pour mettre a jour
clearButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});

// Attend un click pour afficher la popup 'display block'
cart.addEventListener('click', () => {popupCart.style.display = 'block';});

// attend le click sur la croix pour fermer la popup 'display none'
crossBack.addEventListener('click', () => {popupCart.style.display = 'none';})


// execute seulement si l'element du pannier est superieur a 0
if(nbPhone > 0){
    // 'tr' create ligne de tableau
    let newRow = document.createElement('tr');
    // 'td' create case de tableau sur la meme ligne 
    newRow.innerHTML = '<td>Huawei</td><td>Nombre : ' + nbPhone + '</td>';
    // permet de rajouter une nouvelle ligne a la fin du tableau 'tablePannier'
    tablePanier.append(newRow);
}
if(nbAw > 0){
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Apple Watch</td><td>Nombre : ' + nbAw + '</td>';
    tablePanier.append(newRow);
}
if(nbDrone > 0){
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Drone</td><td>Nombre : ' + nbDrone + '</td>';
    tablePanier.append(newRow);
}
if (nbDJI > 0) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Drone DJI</td><td>Nombre : ' + nbDJI + '</td>';
    tablePanier.append(newRow);
}
if (nbMavic > 0) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Drone Mavic</td><td>Nombre : ' + nbMavic + '</td>';
    tablePanier.append(newRow);
}
if (nbCanon > 0) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Drone Canon</td><td>Nombre : ' + nbCanon + '</td>';
    tablePanier.append(newRow);
}









