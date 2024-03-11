const checkUsernames = require("../katas/check-usernames");

describe("checkUsernames", () => {
  test("if input is empty array, return false", () => {
    const output = checkUsernames([]);
    expect(output).toBe(false);
  });
  test("passes for a single username between 5 and 20 characters", () => {
    const output = checkUsernames(["12345abc_"]);
    expect(output).toBe(true);
  });
  test("passes for multiple usernames of the valid format", () => {
    const output = checkUsernames(["12345abc_", "andrew123", "__username"]);
    expect(output).toBe(true);
  });
  test("fails for multiple usernames where one or more are not valid", () => {
    const output = checkUsernames(["123", "Andrew123", "**username"]);
    expect(output).toBe(false);
  });
});
