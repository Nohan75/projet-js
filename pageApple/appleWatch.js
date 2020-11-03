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

