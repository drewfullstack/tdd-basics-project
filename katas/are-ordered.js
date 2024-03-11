function areOrdered(array) {
  if (array.length === 0) {
    return false;
  }

  const containsNaN = array.every((value) => {
    return typeof value === "number";
  });

  if (containsNaN === false) {
    console.log(containsNaN);
    return false;
  }

  const sortedArray = array.slice();
  sortedArray.sort();

  const arraysAreEqual = array.every(
    (value, index) => value === sortedArray[index]
  );

  if (arraysAreEqual) {
    return true;
  } else {
    return false;
  }
}

// checks if an array is in ascending order, and returns true if so, false if not or an empty array.

// [1, 2, 3] => true
// [3, 2, 1] => false
// [] => false

// if array === array.sort()

module.exports = areOrdered;
