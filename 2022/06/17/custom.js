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


function setCookie(name, value, expire) {
    document.cookie = `${name}=${value};expires=${expire};path=/;SameSite=None;secure`;
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    let i = 0;
    // let temp = cookies[i].split('=');
    // while (i < cookies.length && temp[0].split(' ') != name) {
    //     i++;
    //     if (i < cookies.length) {
    //         temp = cookies[i].split('=');
    //     }
    // }
    // return temp[1];

    while (i < cookies.length && !cookies[i].split('=')[0].endsWith(name)) {
        i++;
    }
    return cookies[i].split('=')[1];
}

function save() {
    let setDate = new Date(`${date.value} ${time.value}`);
    setCookie("title", title.value, setDate);
    setCookie("text", text.value, setDate);
    setCookie("expire", setDate.toString(), setDate);
    bsave.style.backgroundColor = "green";
}

function load() {
    title.value = getCookie("title");
    text.value = getCookie("text");

    let datevar = new Date(getCookie("expire"));
    date.value = datevar.toISOString().substring(0, 10);
    time.value = datevar.toTimeString().substring(0, 8);
    bload.style.backgroundColor = "green";
}

function change() {
    bsave.style.backgroundColor = "white";
    bload.style.backgroundColor = "white";
}