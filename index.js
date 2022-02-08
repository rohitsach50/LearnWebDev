// javascript

let count = 0

function increment() {
    count++
    document.getElementById("cnt").innerText = count;
}
let save = document.getElementById("reset")
save.addEventListener('click', reset)

function reset() {
    let table = document.getElementById('lst');
    let trow = document.createElement('li');
    trow.classList.add('lass');
    trow.innerText = count;
    table.appendChild(trow)

    count = 0;
    document.getElementById("cnt").innerText = count;

}
function dec() {
    count--
    document.getElementById("cnt").innerText = count;

}