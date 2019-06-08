const hotel = prompt('Введите число от 1 до 5');
let message;

if (!hotel) {
  message = 'Очень жаль, приходите еще!';
} else {
  // eslint-disable-next-line default-case
  switch (hotel) {
    case '1':
      message = 'Каталог хостелов';
      break;

    case '2':
      message = 'Каталог бюджетных отелей';
      break;

    case '3':
      message = 'Каталог отелей ***';
      break;

    case '4':
      message = 'Каталог отелей ****';
      break;

    case '5':
      message = 'Каталог лучших отелей';
      break;

    default:
      message = 'Введено некоректные данные';
  }
}

alert(message);
