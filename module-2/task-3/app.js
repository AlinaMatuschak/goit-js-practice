const message = 'Proin sociis natoque et magnis parturient montes mus';
const price = 10;

const words = message.split(' ');
console.log(words);

const lenghtWords = words.length;
console.log(lenghtWords);

const priceFor = lenghtWords * price;
console.log(priceFor);
