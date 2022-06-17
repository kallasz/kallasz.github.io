let bsave = document.querySelector('#save');
bsave.addEventListener('click', save);
let bload = document.querySelector('#load');
bload.addEventListener('click', load);

let title = document.querySelector('#title-input');
title.addEventListener('input', change);
let text = document.querySelector('#textarea');
text.addEventListener('input', change);

let date = document.querySelector('#date');
date.addEventListener('input', change);
let time = document.querySelector('#time');
time.addEventListener('input', change);

let datevar = new Date(Date.now());
datevar.setFullYear(datevar.getFullYear()+1);
date.value = datevar.toISOString().substring(0, 10);
time.value = datevar.toTimeString().substring(0, 8);

function save() {
    let setDate = new Date(`${date.value} ${time.value}`);
    document.cookie = `${title.value}/-/${text.value}; expires=${setDate.toUTCString()}`;
    bsave.style.backgroundColor = "green";
    console.log(setDate.toUTCString());
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

load();
save();
change();