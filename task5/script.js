document.querySelector('button').onclick = (event) => {
    event.preventDefault();
    console.log(document.querySelector('#Text').value);
}

const userText = prompt('Введите текст');
const userTextField = document.querySelector('#duplicateField');
userTextField.textContent = userText;