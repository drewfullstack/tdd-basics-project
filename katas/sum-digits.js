function sumDigits(num) {
  if (String(num).length === 1) {
    return num;
  } else {
    const strArray = String(num).split("");
    // remove decimal place
    const decimalRemoved = strArray.filter((num) => num !== ".");

    const numArray = decimalRemoved.map((strNum) => Number(strNum));
    return numArray.reduce((cv, acc) => {
      return cv + acc;
    }, 0);
  }

  // case where multiple digits
  // split it into array of single integer values
  // use reduce function to return total
}

module.exports = sumDigits;
