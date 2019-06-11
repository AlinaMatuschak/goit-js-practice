const users = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
let message;

for (let i = 0; i < users.length; i += 1) {
  const numberElement = i + 1;
  const element = users[i];
  message = `${numberElement} - ${element}`;
  console.log(message);
}
