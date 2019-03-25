export default (array, index, updateFn) => {
  // eslint-disable-next-line no-param-reassign
  array[index] = updateFn(array[index], index, array);

  return array;
};
