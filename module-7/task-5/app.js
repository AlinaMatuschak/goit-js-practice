const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

const getGuestsOlderThan = (users, age) => users.filter(user => user.age > age);

// Вызовы функции для проверки
console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(guests, 55)); // []
