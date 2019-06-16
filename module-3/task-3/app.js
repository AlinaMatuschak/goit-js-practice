const word1 = 'spam';
const word2 = 'sale';
let message;

function checkForSpam(str) {
  const strLower = str.toLowerCase();
  if (strLower.includes(word1) || strLower.includes(word2)) {
    message = 'true';
  } else {
    message = 'false';
  }
  return message;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
