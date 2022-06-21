const { romanToDecimal } = require('../src/roman-numerals-converter')

test('Basic Roman numerals', () => {
  expect(romanToDecimal('I')).toBe(1);
  expect(romanToDecimal('V')).toBe(5);
  expect(romanToDecimal('X')).toBe(10);
  expect(romanToDecimal('L')).toBe(50);
  expect(romanToDecimal('C')).toBe(100);
  expect(romanToDecimal('D')).toBe(500);
  expect(romanToDecimal('M')).toBe(1000);
});

test('Roman numerals lower case', () => {
  expect(romanToDecimal('i')).toBe(1);
});

test('Custom', () => {
  expect(romanToDecimal('LXIX')).toBe(69);
  expect(romanToDecimal('MCMLXXXIV')).toBe(1984);
  expect(romanToDecimal('MMCLVIII')).toBe(2158);
});
