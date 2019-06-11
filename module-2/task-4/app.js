let input;

do {
  input = prompt('Введите число больше 100');

  if (!input) break;
} while (Number(input) < 101);

console.log(input);
