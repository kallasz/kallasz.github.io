let bsave = document.querySelector('#save');
bsave.addEventListener('click', save);
let bload = document.querySelector('#load');
bload.addEventListener('click', load);
let title = document.querySelector('#title-input');
title.addEventListener('input', change);
let text = document.querySelector('#textarea');
text.addEventListener('input', change);

function save() {
    document.cookie = `${title.value}/-/${text.value}`;
    bsave.style.backgroundColor = "green";
}

function load() {
    let temp = document.cookie.split('/-/');
    title.value = temp[0];
    text.value = temp[1];
    bload.style.backgroundColor = "green";
}

function change() {
    bsave.style.backgroundColor = "white";
    bload.style.backgroundColor = "white";
}