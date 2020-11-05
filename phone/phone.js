let img =document.getElementById("phone_img");

const leftArrow = document.getElementById('prevPage');
let pageTarget = window.location.href;

localStorage.setItem('url', pageTarget);
leftArrow.addEventListener('click', () => {
    window.location.href = '../main.html';
});

window.addEventListener('click', changeImage);

function changeImage(event) {
    console.log(event);
    switch (event.target.id) {
        case 'left':
            img.setAttribute('src', 'image/p40.jpg')
            break;
            case 'back':
                img.setAttribute('src', 'image/phone.png')
            break;
            case 'right':
                img.setAttribute('src', 'image/phone_right.jpg')
            break;
            case 'bottom':
                img.setAttribute('src', 'image/phone_bottom.jpg')
            break;
            case 'side':
                img.setAttribute('src', 'image/phone_side.jpg')
            break;
            case 'ep':
                img.setAttribute('src', 'image/phone_ep.jpg')
            break;
            case 'face':
                img.setAttribute('src', 'image/phone_face.jpg')
            break;
    
        default:
            break;
    }
}

let totalPhone =0;
window.addEventListener('click', addToCart)

function addToCart(event) {
    if (event.target.id == 'add_cart') {
        totalPhone=totalPhone+1;
        localStorage.setItem('addPhone', totalPhone)
    }
}