let b = document.querySelector('.button');
b.addEventListener('click', clicking);
function clicking(){
    window.open(b.lastChild.textContent);
}