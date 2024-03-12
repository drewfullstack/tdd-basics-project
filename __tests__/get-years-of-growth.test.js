const getYearsOfGrowth = require("../katas/get-years-of-growth.js");
//base case end population is 0 return 0
describe("getYearsOfGrowth", () => {
  test("if end population is 0 return 0", () => {
    const output = getYearsOfGrowth(0, 0, 0, 0);
    expect(output).toBe(0);
  });
  test("if end population is less than start population return 0", () => {
    const output = getYearsOfGrowth(100, 0, 0, 0);
    expect(output).toBe(0);
  });
  test("if end population is greater than start population return year when reached", () => {
    const output = getYearsOfGrowth(100, 115, 0.05, 10);
    expect(output).toBe(1);
  });
});
