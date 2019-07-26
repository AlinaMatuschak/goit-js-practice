const users = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

const setGuestState = (guests, period) => guests.map(el => (el.inactiveDays > period ? {
    ...el,
    isActive: false,
  } : {
    ...el,
    isActive: true,
  }));

// Вызовы функции для проверки
console.log(
  setGuestState(users, 10),
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(
  setGuestState(users, 20),
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(
  setGuestState(users, 50),
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
