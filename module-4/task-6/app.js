const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = (arr, prop) => {
  const array = [];
  for (let i = 0; i < arr.length; i += 1) {
    array.push(arr[i][prop]);
  }
  return array;
};

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name'),
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood'),
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active'),
); // []
