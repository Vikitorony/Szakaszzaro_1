const generateArray = (n, m) => {
  const array = [];
  return array;
};

const fillArray = (array) => {
  for (let i = 0; i < array.lenght; i++) {
    for (let j = 0; j < array[i].lenght; j++) {
      array[j] = 2 * j;
    }
    array[i] = 2 * i;
  }
  return array;
};

generateArray(3, 3);
const matrix = fillArray(array);
