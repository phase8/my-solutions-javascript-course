// tutaj rozwiązanie


let el = document.querySelectorAll("li");
let list = document.querySelector("ul");



const btn = document.querySelector("button");
let size = 5


function changeHeight() {

    for (let i = 0; i < el.length; i++) {
        el[i].style.display = "block";
        el[i].style.fontSize = size + "px"
    }
    size += 10
}

function changeHeight2() {

    el.forEach(each);
    size += 10
}

function each(item, index) {
    item.style.display = "block"
    item.style.fontSize = size + "px"
}





// btn.onclick = changeHeight


btn.addEventListener("click", changeHeight2)