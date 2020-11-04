const transitionAw = document.querySelector('.transition');
window.onload = () => {
    setTimeout(() => {
        transitionAw.classList.remove('active');
    }, 700);
}