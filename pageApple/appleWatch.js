const awButton = document.getElementsByClassName('nav-button');

const eHidden = document.getElementsByClassName('card');


let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
let siblings = getSiblings(document.querySelector('.nav-button'));
siblingText = siblings.map(e => e.innerHTML);
console.log(siblingText);


function showCard() {
    for(let i = 0; i < awButton.length; i++){
        awButton[i].addEventListener("click", () => {
            switch (i) {
                case 0:
                    eHidden[i].removeAttribute('hidden');
                    eHidden[1].setAttribute('hidden', '');
                    eHidden[2].setAttribute('hidden', '');
                    break;
                case 1:
                    eHidden[i].removeAttribute('hidden');
                    eHidden[0].setAttribute('hidden', '');
                    eHidden[2].setAttribute('hidden', '');
                    break;
                case 2:
                    eHidden[i].removeAttribute('hidden');
                    eHidden[0].setAttribute('hidden', '');
                    eHidden[1].setAttribute('hidden', '');
                    break;
            
                default:
                    break;
            }
        });
        
    }
}
showCard();

function activeButton() {
    for(let i = 0; i < awButton.length; i++){
        awButton[i].addEventListener("click", () => {
            switch (i){
                case 0:
                    awButton[i].classList.add('isActive');
                    awButton[1].classList.remove('isActive');
                    awButton[2].classList.remove('isActive');
                    break;
                case 1:
                    awButton[0].classList.remove('isActive');
                    awButton[i].classList.add('isActive');
                    awButton[2].classList.remove('isActive');
                    break;
                case 2:
                    awButton[0].classList.remove('isActive');
                    awButton[1].classList.remove('isActive');
                    awButton[i].classList.add('isActive');
                    break;
            }
        });
    }
}
activeButton();

const colorButton = document.getElementsByClassName('color');
let selectImg = document.querySelector('img.watch-img');

function changeImg(event) {
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