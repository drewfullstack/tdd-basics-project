const checkStudents = require("../katas/check-students");

describe("checkStudents", () => {
  test("empty array returns empty array", () => {
    const output = checkStudents([]);
    expect(output).toEqual([]);
  });
  test("returns correct output for single student array", () => {
    const output = checkStudents(
      [{ name: "Ben", cohort: "October" }],
      "October"
    );
    expect(output).toBe(true);
  });
  test("returns correct output for multi student array", () => {
    const output = checkStudents(
      [
        { name: "Ben", cohort: "October" },
        { name: "Amanda", cohort: "April" },
        { name: "Matt", cohort: "April" },
      ],
      "April"
    );
    expect(output).toBe(false);
  });
});
