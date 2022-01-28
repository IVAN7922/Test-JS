document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
    console.log('Это простое сообщение, выведенное в консоль');
})

document.querySelector('#alert').addEventListener('click', () => {
    alert('Служит для вывода сообщения на экран');
})

document.querySelector('#prompt').addEventListener('click', () => {
    const text = prompt('Введите сообщение в консоль');
    console.log(text);
})