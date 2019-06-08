const number = prompt('Введите произвольное целое число: ');
let message;

if (!number) {
  message = 'Ну и ладно, пока!';
} else if (Number.isInteger(Number(number))) {
  message = 'Спасибо!';
} else {
  message = 'Необходимо было ввести целое число!';
}

alert(message);
