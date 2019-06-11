const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.shift());
console.log('["Poly", "Ajax", "Chelsey"] : ', users);

console.log(users.pop());
console.log('["Poly", "Ajax"] : ', users);

console.log(users.unshift('Lux'));
console.log('["Lux", "Poly", "Ajax"] : ', users);

console.log(users.push('Jay', 'Kiwi'));
console.log('["Lux", "Poly", "Ajax", "Jay", "Kiwi"] : ', users);

const userToDelete = users.splice(2, 1);
console.log('["Lux", "Poly", "Jay", "Kiwi"] : ', users);

console.log(users.splice(2, 0, 'Kong'));
console.log('["Lux", "Poly", "Kong", "Jay", "Kiwi"] : ', users);
