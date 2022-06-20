const { decimalToRoman } = require('../src/roman-numerals-converter')

test('Number is not an intiger', () => {
  expect(() => {
    decimalToRoman(1.45);
  }).toThrowError('Number must be an intiger.');
  expect(() => {
    decimalToRoman('33');
  }).toThrowError('Number must be an intiger.');
  expect(() => {
    decimalToRoman('abc');
  }).toThrowError('Number must be an intiger.');
});
test('Decimal number is not positive', () => {
  expect(() => {
    decimalToRoman(0);
  }).toThrowError('Decimal number must be positive.');
});
test('Number is greater than 3999', () => {
  expect(() => {
    decimalToRoman(4000);
  }).toThrowError('The largest number that can be represented in Roman numerals is 3999 (MMMCMXCIX).');
});