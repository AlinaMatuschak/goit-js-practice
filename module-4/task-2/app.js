const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

let mostTasks = 0;
const entries = Object.entries(tasksCompleted);

// eslint-disable-next-line no-restricted-syntax
for (const entrie of entries) {
  const value = entrie[1];

  if (value > mostTasks) {
    mostTasks = value;
  }
}

// eslint-disable-next-line no-restricted-syntax
for (const entrie of entries) {
  const key = entrie[0];

  if (tasksCompleted[key] === mostTasks) {
    console.log(key);
  }
}

// const values = Object.values(tasksCompleted);
// let mostTasks = 0;

// for (const value of values) {
//   if (value > mostTasks) {
//     mostTasks = value;
//   }
// }

// for (const task in tasksCompleted) {
//   if (tasksCompleted[task] === mostTasks) {
//     console.log(task);
//   }
// }
