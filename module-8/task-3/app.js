const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const ul = document.querySelector('.list');

const firstLi = document.createElement('li');
firstLi.textContent = elements[0];

const secondLi = document.createElement('li');
secondLi.textContent = elements[1];

const thirdLi = document.createElement('li');
thirdLi.textContent = elements[2];

const fourthLi = document.createElement('li');
fourthLi.textContent = elements[3];

const fifthLi = document.createElement('li');
fifthLi.textContent = elements[4];

ul.append(firstLi, secondLi, thirdLi, fourthLi, fifthLi);
