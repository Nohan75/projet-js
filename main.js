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
let elementInCard = parseInt(cart.innerHTML) + parseInt(nbPhone);
console.log(nbPhone);
window.addEventListener('load', () => {
    cart.innerHTML = elementInCard;
});


cart.addEventListener('click', () => {popupCart.style.display = 'block';});
crossBack.addEventListener('click', () => {popupCart.style.display = 'none';})

cart.addEventListener('click', () => {

    if(elementInCard === 0){
        console.log(elementInCard);
        panierContent.innerHTML = '<p>Le panier est vide</p>';
    } else {
        panierContent.innerHTML = '<p>Le panier est supérieur à '+elementInCard+'</p>';
    }
});


