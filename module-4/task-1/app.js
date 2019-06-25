const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
console.log(user);

user.hobby = 'javascript';
console.log(user);

user.premium = false;
console.log(user);

const keys = Object.keys(user);
// eslint-disable-next-line no-restricted-syntax
for (const key of keys) {
  console.log(key, ': ', user[key]);
}

const entries = Object.entries(user);
// eslint-disable-next-line no-restricted-syntax
for (const entrie of entries) {
  const key = entrie[0];
  const value = entrie[1];

  console.log(key, ': ', value);
}
