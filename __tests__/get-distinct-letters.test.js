const getDistinctLetters = require("../katas/get-distinct-letters");

describe("getDistinctLetters", () => {
  test("empty strings", () => {
    const output = getDistinctLetters("", "");
    expect(output).toBe("");
  });
  test("concatanates the unique letters and sorts them", () => {
    const output = getDistinctLetters("hello", "world");
    expect(output).toBe("dehrw");
  });
});
