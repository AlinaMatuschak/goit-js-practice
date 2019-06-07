const correctPassword = 'jqueryismyjam';
const password = prompt('Введите пароль доступа: ');

if (!password) {
  alert('Была нажата отмена!');
} else if (password === correctPassword) {
  alert('Доступ в секретный бункер разрешен!');
} else {
  alert('Неверный пароль, активирована система защиты!');
}
