const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];

for (let i = 0; i < numbers.length; i += 1) {
  const element = numbers[i];

  if (element > num) {
    matched.push(element);
  }
}

console.log(matched);
