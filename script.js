let buttonList = document.querySelectorAll('.button');
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', clicking);
}

function clicking(e) {
    let a = e.target;
    if(a.children.length != 0){
        window.open(a.lastChild.textContent);
    }
    else{
        window.open(a.parentNode.lastChild.textContent);
    }
}