const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];


// eslint-disable-next-line no-shadow
const combine = (names, prices) => {
  const clint = [];
  for (let i = 0; i < names.length; i += 1) {
    clint.push({
      name: names[i],
      price: prices[i],
    });
  }
  return clint;
};

const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price
