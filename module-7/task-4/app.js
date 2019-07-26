const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

const getActiveGuests = users => users.filter(user => user.isActive);

// Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
