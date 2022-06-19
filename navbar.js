function buttons() {
    let menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', menu);
    menu();

    let buttonList = document.querySelectorAll('.link');
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].parentElement.addEventListener('click', clicking);
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

function menu() {
    let menu = document.querySelector('.menu');
    // if (menu.style.display == "grid") {
    //     menu.style.display = "none";
    // }
    // else {
    //     menu.style.display = "grid";
    // }
    menu.classList.toggle('display');
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

    let menu = document.createElement('div');
    menu.className = "menu";
    header.appendChild(menu);

    let divItem1 = document.createElement('div');
    divItem1.className = "nav-item button menu-button";
    divItem1.innerHTML = '<strong>MENU</strong>';
    div_grid.appendChild(divItem1);

    // let divItem2 = document.createElement('div');
    // divItem2.className = "nav-item button nav-button";
    // divItem2.innerHTML = '<strong>FAVORITES</strong><span class="link">/2022/05/26</span>';
    // div_grid.appendChild(divItem2);

    let divItem3 = document.createElement('div');
    divItem3.className = "nav-item button nav-button";
    divItem3.innerHTML = '<strong>GITHUB REPO</strong><span class="link">https://github.com/kallasz/kallasz.github.io</span>';
    div_grid.appendChild(divItem3);

    let divItem5 = document.createElement('div');
    divItem5.className = "nav-item text";
    divItem5.innerHTML = '<strong>KALLASZ.GITHUB.IO</strong>';
    div_grid.appendChild(divItem5);

    let divItem4 = document.createElement('div');
    divItem4.className = "nav-item button search-button";
    divItem4.innerHTML = '<strong>SEARCH</strong>';
    div_grid.appendChild(divItem4);

    //menu
    // let divItem2M = document.createElement('div');
    // divItem2M.className = "nav-item button menu-button";
    // divItem2M.innerHTML = '<strong>FAVORITES</strong><span class="link">/2022/05/26</span>';
    // menu.appendChild(divItem2M);

    let divItem3M = document.createElement('div');
    divItem3M.className = "nav-item button menu-button";
    divItem3M.innerHTML = '<strong>GITHUB REPO</strong><span class="link">https://github.com/kallasz/kallasz.github.io</span>';
    menu.appendChild(divItem3M);

    let divItem4M = document.createElement('div');
    divItem4M.className = "nav-item button menu-button";
    divItem4M.innerHTML = '<strong>GITHUB REPO</strong><span class="link">https://github.com/kallasz/kallasz.github.io</span>';
    menu.appendChild(divItem4M);

    // let div_item4 = document.createElement('div');
    // div_item4.className = "nav-item nav-search";
    // div_item4.innerHTML = '<input type="search" id="search" placeholder="SEARCH">';
    // div_grid.appendChild(div_item4);
    
    
}

function main() {
    header();
    buttons();
}
main();