const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function (event) {
  this.textContent = prompt ('По мне кликнули!');
  event.preventDefault();
})