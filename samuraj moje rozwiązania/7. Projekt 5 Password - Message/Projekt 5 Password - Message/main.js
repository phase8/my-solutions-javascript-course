// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
    div.textContent = '';

    passwords.forEach((password, index) => {
        password = password.toLowerCase() // notice that we dont have to create new variable here ! 
        if (password === e.target.value.toLowerCase()) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
}
input.addEventListener("input", showMessage)




/* solution of author of the course

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]


let scopetest = 1

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(passwords[index]);
    scopetest = 2
})



const showMessage = (e) => {

    const input = e.target.value.toLowerCase()
    passwords.forEach((password, i) => {
        if (password === input) {
            document.querySelector('div').textContent = messages[i];
        }
    })
    console.log(scopetest)
}

input.addEventListener("input", showMessage)

*/



/* the best solution of author of the course


const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector('div')

const LCPasswords = passwords.map(password => password.toLowerCase())

const showMessage = (e) => {
 const textInput = e.target.value.toLowerCase();

 for (let i = 0; i < LCPasswords.length; i++) {
  if (textInput === LCPasswords[i]) {
   div.innerHTML = messages[i];
  }
 }
}

input.addEventListener("input", showMessage)

*/