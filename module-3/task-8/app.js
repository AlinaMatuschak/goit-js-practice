const filterFromArray = (array, ...numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (array.includes(numbers[i])) {
      const index = array.indexOf(numbers[i]);
      array.splice(index, 1);
    }
  }
  return array;
};

console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4),
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4),
); // [12, 8, 17]
