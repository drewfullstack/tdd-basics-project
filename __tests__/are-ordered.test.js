const areOrdered = require("../katas/are-ordered");

describe("areOrdered", () => {
  test("return false for an empty array", () => {
    const output = areOrdered([]);
    expect(output).toBe(false);
  });
  test("returns true for an ascending array containing only integers", () => {
    const output = areOrdered([1, 2, 3]);
    expect(output).toBe(true);
  });
  test("returns false for a non ascending array containing only integers", () => {
    const output = areOrdered([3, 2, 1]);
    expect(output).toBe(false);
  });
  test("returns false for an array containing only non integer elements", () => {
    const output = areOrdered([3, 2, 1, "a"]);
    expect(output).toBe(false);
  });
});
