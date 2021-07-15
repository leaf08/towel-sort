
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  let result = [];
  matrix.map((item, index) => {
    if (index % 2 === 0) result = result.concat(item);
    else result = result.concat(item.reverse());
  });
  return result;
}
