function getRandomNumber() {
  return Math.random() * 256;
}

function createBoxes(num) {
  const container = document.createElement('div');
  let length = 20;
  new Array(num).fill('').map((e) => {
    const div = document.createElement('div');
    div.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    length += 10;
    div.style.width = `${length}px`;
    div.style.height = `${length}px`;
    container.appendChild(div);
    return e;
  });
  document.querySelector('#root').appendChild(container);
  return container;
}

createBoxes(9);
