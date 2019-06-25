const countProps = (obj) => {
  const keys = Object.keys(obj);
  let sum = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    sum += 1;
  }

  return sum;
};

// Вызовы функции для проверки
console.log(
  countProps({}),
); // 0

console.log(
  countProps({ a: 1, b: 3, c: 'hello' }),
); // 3
