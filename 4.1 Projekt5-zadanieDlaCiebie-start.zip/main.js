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
        if (password.toLowerCase() === e.target.value.toLowerCase()) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
}
input.addEventListener("input", showMessage)