const uniqueNumbers = [2, 1, 4, 9];

const addUniqueNumbers = (...arg) => {
  for (let i = 0; i < arg.length; i += 1) {
    if (!uniqueNumbers.includes(arg[i])) {
      uniqueNumbers.push(arg[i]);
    }
  }
};

addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
