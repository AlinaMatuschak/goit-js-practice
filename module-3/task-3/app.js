const word1 = 'spam';
const word2 = 'sale';

function checkForSpam(str) {
  const strLower = str.toLowerCase();
  return strLower.includes(word1) || strLower.includes(word2);
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
