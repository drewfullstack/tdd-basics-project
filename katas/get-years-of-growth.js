function getYearsOfGrowth(initialPop, endPop, r, m) {
  if (endPop === 0) {
    return 0;
  }
  if (endPop < initialPop) {
    return 0;
  }
  let currentPop = initialPop;
  for (let currentYear = 1; currentYear < 10000; currentYear++) {
    currentPop += currentPop * r + m;
    if (currentPop >= endPop) {
      return currentYear;
    }
  }
}
//The function getYearsOfGrowth should take 4 parameters:
// a starting population, an end population, a percentage
// of growth and a netMigration figure. If the population
// grows by the given percentage each year, plus an additional
// number of net migrants, the function should calculate
//how many years it takes until the end population total is
//reached. E.g.getYearsOfGrowth(1000, 2000, 2, 12);
//--> 25
//Note: think carefully about which Jest matcher is
//appropriate from now on!

module.exports = getYearsOfGrowth;
