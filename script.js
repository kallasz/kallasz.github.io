function buttons() {
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
}

function header() {
    let body = document.querySelector('body');
    let header = document.createElement('header');
    body.appendChild(header);

    let navBar = document.createElement('nav');
    header.appendChild(navBar);

    let div_grid = document.createElement('div');
    div_grid.className = "nav-grid";
    navBar.appendChild(div_grid);

    let div_item = document.createElement('div');
    div_item.className = "nav-item";
    div_item.innerHTML = `<img src="https://kallasz.github.io/favicon.ico" alt="favicon">`;
    div_grid.appendChild(div_item);

    let div_item2 = document.createElement('div');
    div_item2.className = "nav-item button nav-button";
    div_item2.innerHTML = '<strong>FAVORITES</strong><span class="link">https://kallasz.github.io/2022/05/26</span>';
    div_grid.appendChild(div_item2);

    let div_item3 = document.createElement('div');
    div_item3.className = "nav-item button nav-button";
    div_item3.innerHTML = '<strong>GITHUB REPO</strong><span class="link">https://github.com/kallasz/kallasz.github.io</span>';
    div_grid.appendChild(div_item3);

    let div_item4 = document.createElement('div');
    div_item4.className = "nav-item nav-search";
    div_item4.innerHTML = "THERE WILL BE A SEARCH BAR I HOPE";
    div_grid.appendChild(div_item4);
}

function main() {
    header();
    buttons();
}
main();