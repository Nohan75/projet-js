const awButton = document.querySelectorAll('li.nav-button');

const eHidden = document.querySelectorAll('.card');


const leftArrow = document.getElementById('prevPage');

let pageTarget = window.location.href;

localStorage.setItem('url', pageTarget);

leftArrow.addEventListener('click', () => {
    window.location.href = '../main.html';
});


awButton.forEach(button => {
    button.addEventListener('click', () => {
        awButton.forEach(element => element.classList.remove('isActive'));
        button.classList.add('isActive');
    });
});

awButton.forEach(button => {
    button.addEventListener('click', () => {
        eHidden.forEach(card => card.setAttribute('hidden', ''));
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

let totalAw =0;
window.addEventListener('click', addToCart)

function addToCart(event) {
    if (event.target.id == 'add_cart') {
        totalAw++;
        localStorage.setItem('addAw', totalAw)
    }
}



const colorButton = document.getElementsByClassName('color');
let selectImg = document.querySelector('img.watch-img');

function changeImg() {
    for(let j = 0; j < colorButton.length; j++){
        colorButton[j].addEventListener("click", () => {
            switch (j){
                case 0:
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

nextChevron[0].addEventListener("click", () => {

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