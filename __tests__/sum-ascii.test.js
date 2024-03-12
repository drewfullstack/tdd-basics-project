const sumAscii = require("../katas/sum-ascii");

describe("sumAscii", () => {
  test("returns empty array when passed an empty array", () => {
    const output = sumAscii([]);
    expect(output).toEqual([]);
  });
  test("returns sum of ASCII codes for a single name array", () => {
    const output = sumAscii(["andrew"]);
    expect(output).toBe("andrew");
  });
  test("returns name with highest ASCII code total for a multi name array", () => {
    const output = sumAscii(["matt", "andrew", "dave", "jimmmmmmmy", "pete"]);
    expect(output).toBe("jimmmmmmmy");
  });
});
