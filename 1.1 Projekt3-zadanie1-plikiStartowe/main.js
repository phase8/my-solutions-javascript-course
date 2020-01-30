// tutaj rozwiązanie


let el = document.querySelectorAll("li");

const btn = document.querySelector("button");
let fnt = 5

//el.style.display = "block";

function changeHeight() {

    for (let i = 0; i < el.length; i++) {
        el[i].style.display = "block";
        el[i].style.fontSize = fnt
    }

}

// btn.onclick = changeHeight


btn.addEventListener("click", changeHeight)