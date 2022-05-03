document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Данная команда служит для вывода информации в консоль');
    console.log('Это простое сообщение, выведенное в консоль');
})

document.querySelector('#alert').addEventListener('click', () => {
    alert('Эта команда служит для вывода сообщения на экран');
})

document.querySelector('#prompt').addEventListener('click', () => {
    const text = prompt('Введите сообщение в консоль');
    console.log(text);
})