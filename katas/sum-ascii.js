function sumAscii(array) {
  // helper function - return the total of the ASCII characters in string
  function getTotal(name) {
    let asciiTotalOfCurrentName = 0;
    for (let letter of name) {
      // letter => "m"
      asciiTotalOfCurrentName += letter.charCodeAt(0);
    }
    return asciiTotalOfCurrentName;
  }

  // case for 0 or 1 length arrays
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return array[0];
  }

  // multi name arrays

  let asciiHighestName = getTotal(array[0]); // "matt" -> 500
  let nameWithHighestTotal = array[0];

  for (let name of array) {
    name = name.toLowerCase();
    // name => "matt", name => "andrew"
    let asciiTotalOfCurrentName = getTotal(name); // "jimmmmmmmy" -> 1500,
    if (asciiTotalOfCurrentName > asciiHighestName) {
      asciiHighestName = asciiTotalOfCurrentName;
      nameWithHighestTotal = name;
    }
  }

  return nameWithHighestTotal;
}

module.exports = sumAscii;
