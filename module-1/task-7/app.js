// eslint-disable-next-line radix
const value = Number.parseInt(Math.random() * 100);
let type;
if (value % 2 === 0) {
  type = 'четное';
} else {
  type = 'не четное';
}
console.log(`${value} is ${type}`);
