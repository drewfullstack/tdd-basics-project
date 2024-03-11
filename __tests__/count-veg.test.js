const countVeg = require("../katas/count-veg");

/* base case - if type input is empty array, return []
 case 2 - if veg type is empty string, return 0 s

example
countVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') should return 9
*/

describe("countVeg", () => {
  test("if input is empty array, return 0", () => {
    const output = countVeg([]);
    expect(output).toEqual(0);
  });

  test("if veg type is empty string, return 0", () => {
    const output = countVeg([], "");
    expect(output).toBe(0);
  });

  test("returns correct quantity for given veg type", () => {
    const output = countVeg(
      [
        { name: "Parsnip", type: "root", quantity: 4 },
        { name: "Broccoli", type: "brassica", quantity: 1 },
        { name: "Carrot", type: "root", quantity: 5 },
        { name: "Onion", type: "bulb", quantity: 3 },
        { name: "Chard", type: "leaf", quantity: 3 },
        { name: "Runner beans", type: "legume", quantity: 8 },
      ],
      "root"
    );
    expect(output).toBe(9);
  });
});
