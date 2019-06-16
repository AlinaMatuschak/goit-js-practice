let message;

function formatString(str) {
  if (str.length <= 40) {
    message = str;
  } else {
    const strArr = Array.from(str);
    strArr.length = 40;
    const strArrJoin = strArr.join('');
    message = `${strArrJoin} ...`;
  }
  console.log(str.length);
  return message;
}

console.log(
  formatString('Curabitur ligula sapien, tincidunt non.'),
); // вернется оригинальная строка

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
); // вернется форматированная строка

console.log(
  formatString('Curabitur ligula sapien.'),
); // вернется оригинальная строка

console.log(
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
); // вернется форматированная строка
