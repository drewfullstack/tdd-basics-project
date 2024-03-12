function getDistinctLetters(str1, str2) {
  const arr1 = [...str1]; // => ["h", "e"...]
  const arr2 = [...str2]; // => ["w", "o"...]

  if (str1 === "" && str2 === "") {
    return "";
  }
  let uniqueLetters = [];

  for (let letter of arr1) {
    if (!arr2.includes(letter)) {
      uniqueLetters.push(letter);
    }
  }
  for (let letter of arr2) {
    if (!arr1.includes(letter)) {
      uniqueLetters.push(letter);
    }
  }
  const setFromUniqueLetters = new Set(uniqueLetters);
  const arrayFromUniqueLetters = Array.from(setFromUniqueLetters);
  return arrayFromUniqueLetters.sort().join("");

  /*
The function getDistinctLetters should take two strings and return a string of all 
the letters that are unique to either of the input strings, in alphabetical order.

E.g.

When given 'hello' and 'world', the function should return 'dehrw'. 
This is because h and e are in 'hello' but not in 'world', 
and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'.

find all letters in str1 but not str2
find all letters in str2 but not in str1
concatanate
sort
return



    */
}

module.exports = getDistinctLetters;
