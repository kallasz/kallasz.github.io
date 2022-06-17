let d = document.querySelector('#main');
d.addEventListener('click', generateTheButtons);
let b = document.querySelector('body')

function generateTheButtons(){
    for (let i = 0; i < 10; i++) {
        let e = document.createElement('button');
        let s = document.createElement('span');
        s.innerHTML = i;
        e.appendChild(s);
        
        e.className = "addedButton";
        b.appendChild(e);
    }
}
