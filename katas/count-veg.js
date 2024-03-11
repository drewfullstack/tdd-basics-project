function countVeg(vegArray, vegType) {
  if (vegArray.length === 0) {
    return 0;
  }
  if (vegType === "") {
    return 0;
  }

  const filteredVeg = vegArray.filter((vegObj) => {
    if (vegObj.type === vegType) {
      return vegObj;
    }
  });

  let count = 0;
  filteredVeg.forEach((veg) => (count += veg.quantity));
  return count;
}

module.exports = countVeg;
