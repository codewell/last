/**
 * Get the last element of an array
 * @param {array} arr - Arbitrary array
 */
const last = (arr) => {
  const { length } = arr;
  const lastElement = length - 1;
  return arr[lastElement];
};

module.exports = last;