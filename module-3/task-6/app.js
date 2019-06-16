const findLargestNumber = (numbers) => {
  let largestNumber = numbers[0];

  for (const number of numbers) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }

  return largestNumber;
};

console.log(
  findLargestNumber([1, 2, 3]),
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5]),
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74]),
); // 128
