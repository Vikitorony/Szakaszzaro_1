const count = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter += 1;
  }
  return counter;
};

console.log(count([1, 4, 5, 6, 7, 8, 10]));
