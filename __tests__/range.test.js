const range = require("../katas/range");

describe("range", () => {
  test("if no arguements passed, return empty array", () => {
    const output = range();
    expect(output).toEqual([]);
  });
  test("when just a length property is provided, return array with numbers from 0 up to the length", () => {
    const output = range(5);
    expect(output).toEqual([0, 1, 2, 3, 4]);
  });
  test("when length and start value property is provided, return array with numbers from start value up to the length", () => {
    const output = range(5, 2);
    expect(output).toEqual([2, 3, 4, 5, 6]);
  });
  test("when length, start value and step property is provided, return array with numbers from start value up to the length, with step value in between each number", () => {
    const output = range(5, 2, 2);
    expect(output).toEqual([2, 4, 6, 8, 10]);
  });
});
