const users = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 },
];

const findGuestById = (guests, id) => guests.find(guest => guest.id === id);

// Вызовы функции для проверки
console.log(
  findGuestById(users, 3),
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  findGuestById(users, 1),
); // {id: 1, name: 'Mango', age: 20}

console.log(
  findGuestById(users, 5),
); // undefined
