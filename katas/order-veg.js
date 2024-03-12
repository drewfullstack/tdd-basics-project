function orderVeg(arr) {
  const sortedArr = [...arr];
  //The orderVeg function should take a array of vegetables
  //and return a new array in which the vegetables are
  //sorted in ascending order according to quantity.
  if (sortedArr.length === 0) {
    return [];
  }
  if (sortedArr.length === 1) {
    return arr;
  }
  const sortByQuantity = (a, b) => a.quantity - b.quantity;
  sortedArr.sort(sortByQuantity);
  return sortedArr;
}

module.exports = orderVeg;
