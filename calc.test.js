const calc = require('./calc.js');

test('Sum test', () => {
  expect(calc.sum(1, 2)).toBe(3);
});