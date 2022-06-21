const { decimalToRoman } = require('../src/roman-numerals-converter')

test('Basic decimal numbers', () => {
  expect(decimalToRoman(1)).toBe('I');
  expect(decimalToRoman(2)).toBe('II');
  expect(decimalToRoman(3)).toBe('III');
  expect(decimalToRoman(4)).toBe('IV');
  expect(decimalToRoman(5)).toBe('V');
});

test('Number is not an intiger', () => {
  expect(() => {
    decimalToRoman(1.45);
  }).toThrowError('Number must be an integer.');
  expect(() => {
    decimalToRoman('33');
  }).toThrowError('Number must be an integer.');
  expect(() => {
    decimalToRoman('abc');
  }).toThrowError('Number must be an integer.');
});

test('Decimal number is not positive', () => {
  expect(() => {
    decimalToRoman(0);
  }).toThrowError('Number must be positive.');
  expect(() => {
    decimalToRoman(-5);
  }).toThrowError('Number must be positive.');
});

test('Number is greater than 3999', () => {
  expect(() => {
    decimalToRoman(4000);
  }).toThrowError('The largest number that can be represented in Roman numerals is 3999 (MMMCMXCIX).');
});
