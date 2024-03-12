const removeDuplicates = require("../katas/remove-duplicates.js");
//base case if input array is empty return empty array
describe("removeDuplicates", () => {
  test("if input array is empty return empty array", () => {
    const output = removeDuplicates([]);
    expect(output).toEqual([]);
  });
  test("check output array is different to input array", () => {
    const input = [];
    const copyInput = [...input];
    removeDuplicates(input);
    expect(input).toEqual(copyInput);
  });
  test("check output array has duplicates removed", () => {
    const input = ["a", "b", "c", "a"];
    const output = removeDuplicates(input);
    expect(output).toEqual(["a", "b", "c"]);
  });
});
