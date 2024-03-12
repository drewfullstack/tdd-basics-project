const orderVeg = require("../katas/order-veg.js");
//base case if input array is empty array return empty array
describe("order-veg", () => {
  test("if input array is empty array return empty array", () => {
    const output = orderVeg([]);
    expect(output).toEqual([]);
  });
  test("if input array contains 1 veg object array return same array", () => {
    const output = orderVeg([{ name: "Parsnip", type: "root", quantity: 4 }]);
    expect(output).toEqual([{ name: "Parsnip", type: "root", quantity: 4 }]);
  });
  test("if input array contains multiple veg object array return ordered array by veg quantity", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const expectedOutput = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    expect(orderVeg(input)).toEqual(expectedOutput);
  });
});
