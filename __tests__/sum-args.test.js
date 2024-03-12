const sumArgs = require("../katas/sum-args");

// if no arguements, return 0
describe("sumArgs", () => {
  test("if no arguements, return 0", () => {
    const output = sumArgs();
    expect(output).toBe(0);
  });

  test("if a single arguement, return the arguement", () => {
    const output = sumArgs(4);
    expect(output).toBe(4);
  });
  test("if passed in multiple numbers, returns the sum of the numbers", () => {
    const output = sumArgs(1, 2, 3);
    expect(output).toBe(6);
  });
});
