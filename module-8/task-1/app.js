const ul = document.querySelector('.categories');
for (let i = 0; i < ul.children.length; i += 1) {
  console.log('Категория:', ul.children[i].firstChild.textContent.trim());
  console.log('Количество вложенных li:', ul.children[i].lastElementChild.childElementCount);
}
