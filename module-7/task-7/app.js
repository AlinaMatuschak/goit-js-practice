const getTotal = order => Object.values(order).reduce((total, price) => total + price, 0);


console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

console.log(getTotal({
  bread: 10, apples: 25, milk: 15, cheese: 40,
})); // 90

console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110
