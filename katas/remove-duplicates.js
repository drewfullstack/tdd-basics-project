function removeDuplicates(arr) {
  const arrCopy = [...arr];
  if (arr.length === 0) {
    return [];
  }
  const set = new Set(arrCopy);
  const duplicatesRemovedArr = Array.from(set);
  return duplicatesRemovedArr;
}
//The function removeDuplicates should take an array and
//return a new array with any duplicate items removed.
//The original order should be maintained.

module.exports = removeDuplicates;
