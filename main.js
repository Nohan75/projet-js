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
const popupCart = document.querySelector('.card-panier');
const crossBack = document.querySelector('.cross-back');
let nbPhone = localStorage.getItem('addPhone');
let nbAw = localStorage.getItem('addAw');
let nbDrone = localStorage.getItem('addDrone');
const panierContent = document.querySelector('.panier-content');
const tablePanier = document.querySelector('.list-panier');
let elementInCard = toInt(nbDrone) + toInt(nbAw) + toInt(nbPhone);

console.log(nbPhone);
console.log(nbAw);
console.log(nbDrone);
console.log(nbDrone === null);

window.addEventListener('load', () => {
    let total
    if(nbDrone === null || nbAw === null || nbPhone === null){
        total = toInt(nbDrone) + toInt(nbAw) + toInt(nbPhone);
    }
    cart.innerHTML = total;
    
});
function toInt(nb){
    if(nb === null){
        nb = '0'
    }
    return parseInt(nb);
}


cart.addEventListener('click', () => {popupCart.style.display = 'block';});
crossBack.addEventListener('click', () => {popupCart.style.display = 'none';})

if(nbPhone > 0){
    let newRow = document.createElement('tr');
    newRow.innerHTML = '<td>Huawei</td><td>Nombre : ' + nbPhone + '</td>';
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










