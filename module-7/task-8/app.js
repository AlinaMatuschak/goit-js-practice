const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40,
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1,
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1,
};

const orderC = {
  bread: 2,
  cheese: 2,
};

const getTotal = (products, order) => Object.keys(order)
  .reduce((total, el) => total + order[el] * products[el], 0);

  // Вызовы функции для проверки
console.log(getTotal(products, orderA)); // 140
console.log(getTotal(products, orderB)); // 120
console.log(getTotal(products, orderC)); // 80
