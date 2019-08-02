const collectInputData = (inputs) => {
  const arrayInputs = [...inputs];
  return arrayInputs.map(e => e.value);
};
const inputs = document.querySelectorAll('input[type=checkbox]:checked');
console.log(collectInputData(inputs));
