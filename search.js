//search
let bar = document.querySelector('#search');
let cards = document.querySelectorAll('.card');
bar.addEventListener('input', search);

function search() {
    for (let i = 0; i < cards.length; i++) {
        let element = cards[i];
        // console.log("hello");
        if (!element.innerHTML.includes(bar.value)) {
            element.style.display = "none";
        }
        else{
            element.style.display = "grid";
        }
    }
}

// let first = true;
// let s1before = bar.value;
// function start() {
//     if (first == true) {
//         first = false;
//         console.log("success");
//         setInterval(check(s1before), 1000);
//     }

// }

// function check(s1before) {
//     console.log(s1before);
//     if (s1before == bar.value) {
//         console.log("same");
//     }
//     s1before == bar.value;
// }