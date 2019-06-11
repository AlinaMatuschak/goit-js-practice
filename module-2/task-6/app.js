const message = 'May the force be with you';
let longestWord = message[0];

const words = message.split(' ');

// eslint-disable-next-line no-restricted-syntax
for (const word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);
