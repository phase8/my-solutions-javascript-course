let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    btn.innerText = "Dodaj 10 elementów listy";
    document.addEventListener("click", createLiElements)
}

const createLiElements = () => {
    for (x = 0; x < 10; x++) {

        //creation of element
        var liElement = document.createElement('li');
        let ulMain = document.querySelector("ul")
        liElement.innerText = "Element nr " + orderElement++;
        liElement.style.listStyle = "none";
        liElement.style.fontSize = size++ + "px";

        //  append element
        ulMain.appendChild(liElement);
        // remember to always create before append !
    }

}

/*
LONGER AND WORSE ALTERNATIVE:
const createLiElements = () => {
    for (x = 0; x < 10; x++) {
        var liElement = document.createElement('li');
        let ulMain = document.querySelector("ul")
        ulMain.appendChild(liElement);
    }
    let liMain = document.querySelectorAll("li")
    for (x = 0; x < liMain.length; x++) {
        const divyArray = Array.from(liMain)
        let ten = divyArray.slice(-10)
      
        ten[x].innerText = "Element nr " + orderElement;
        ten[x].style.listStyle = "none";
        ten[x].style.fontSize = size + "px";
        orderElement++
        size++ // u can also write: size += 1
    }
}
*/









init()