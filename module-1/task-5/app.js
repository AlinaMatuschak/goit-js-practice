const total = 100;
const ordered = 100;
let mesage;

if (ordered > total) {
  mesage = 'На складе недостаточно твоаров!';
  console.log(mesage);
} else if (ordered === total) {
  mesage = 'Вы забираете весь товар cо склада!';
  console.log(mesage);
} else {
  mesage = 'Заказ оформлен, с вами свяжется менеджер';
  console.log(mesage);
}
