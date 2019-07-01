const Storage = function (items) {
  this.items = items;
  this.getItems = function () {
    return this.items;
  };
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (item !== items[i]) {
        continue;
      }
      this.items.splice(i, 1);
    }
  };
};

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
