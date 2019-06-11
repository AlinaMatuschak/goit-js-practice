const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
const input = prompt('Введите цифру между x и y через ,');
const inputArry = input.split(',');
const min = Number(inputArry[0]);
const max = Number(inputArry[1]);
let message;

// eslint-disable-next-line no-restricted-syntax
for (const number of numbers) {
  if (numbers.includes(min) && numbers.includes(max)) {
    message = 'Поздравляем, Вы угадали!';
  } else {
    message = 'Сожалеем, Вы не угадали!';
  }
}

alert(message);
