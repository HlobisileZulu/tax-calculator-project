const { calculateTax } = require('../taxCalculator');

describe("Tax Calculator", () => {

  it("should calculate tax correctly", () => {
    expect(calculateTax(1000)).toBe(150);
  });

});
