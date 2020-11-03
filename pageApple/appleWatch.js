const awButton = document.getElementsByClassName('nav-button');

const eHidden = document.getElementsByClassName('card');



function showCard() {
    for(let i = 0; i < awButton.length; i++){
        awButton[i].addEventListener("click", () => {
            switch (i) {
                case 0:
                    eHidden[i].toggleAttribute('hidden');
                    break;
                case 1:
                    eHidden[i].toggleAttribute('hidden');
                    break;
                case 2:
                    eHidden[i].toggleAttribute('hidden');
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
                    awButton[i].classList.toggle('isActive');
                    break;
                case 1:
                    awButton[i].classList.toggle('isActive');
                    break;
                case 2:
                    awButton[i].classList.toggle('isActive');
                    break;
            }
        });
    }
}
activeButton();

const colorButton = document.getElementsByClassName('color');
let selectImg = document.querySelector('img.watch-img');
console.log(selectImg);
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