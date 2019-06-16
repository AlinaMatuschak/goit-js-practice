let message;

function checkNumberType(num) {
  if (num % 2 === 0) {
    message = 'Even';
  } else {
    message = 'Odd';
  }
  return message;
}

console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'
