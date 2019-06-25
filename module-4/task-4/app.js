const isObjectEmpty = (obj) => {
  const keys = Object.keys(obj);
  let sum = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    sum += 1;
  }

  return sum === 0;
};

// Вызовы функции для проверки
console.log(
  isObjectEmpty({}),
); // true

console.log(
  isObjectEmpty({ a: 1 }),
); // false

console.log(
  isObjectEmpty({ a: 1, b: 2 }),
); // false
