const { romanToArabic } = require('../src/romanize-deromanize');

test('Basic roman numerals', () => {
  expect(romanToArabic('I')).toBe(1);
  expect(romanToArabic('V')).toBe(5);
  expect(romanToArabic('X')).toBe(10);
  expect(romanToArabic('L')).toBe(50);
  expect(romanToArabic('C')).toBe(100);
  expect(romanToArabic('D')).toBe(500);
  expect(romanToArabic('M')).toBe(1000);
});

test('Roman number is lower case', () => {
  expect(romanToArabic('i')).toBe(1);
  expect(romanToArabic('xXxIiI')).toBe(33);
});

test('Roman number contains whitespace', () => {
  expect(romanToArabic(' M CCC L XXX I X ')).toBe(1389);
});

test('Random roman numbers', () => {
  expect(romanToArabic('LXIX')).toBe(69);
  expect(romanToArabic('MCMLXXXIV')).toBe(1984);
  expect(romanToArabic('MMCLVIII')).toBe(2158);
});
