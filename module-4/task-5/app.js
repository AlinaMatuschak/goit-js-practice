const countTotalSalary = (salaries) => {
  const values = Object.values(salaries);
  let sum = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const value of values) {
    sum += value;
  }

  return sum;
};

// Вызовы функции для проверки
console.log(
  countTotalSalary({}),
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
