export default (array, index, updateFn) => [
  ...array.slice(0, index),
  updateFn(array[index], index, array),
  ...array.slice(index + 1),
];
