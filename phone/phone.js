let img =document.getElementById("phone_img");
console.log(img);

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

