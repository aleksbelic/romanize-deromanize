const { romanToArabic } = require('../src/romanize-deromanize');

test('Basic roman numerals', () => {
  expect(romanToArabic('I')).toEqual(1);
  expect(romanToArabic('V')).toEqual(5);
  expect(romanToArabic('X')).toEqual(10);
  expect(romanToArabic('L')).toEqual(50);
  expect(romanToArabic('C')).toEqual(100);
  expect(romanToArabic('D')).toEqual(500);
  expect(romanToArabic('M')).toEqual(1000);
});

test('Roman number is lower case', () => {
  expect(romanToArabic('i')).toEqual(1);
  expect(romanToArabic('xXxIiI')).toEqual(33);
});

test('Roman number contains whitespace', () => {
  expect(romanToArabic(' M CCC L XXX I X ')).toEqual(1389);
});

test('Random roman numbers', () => {
  expect(romanToArabic('LXIX')).toEqual(69);
  expect(romanToArabic('CMXCIX')).toEqual(999);
  expect(romanToArabic('MCMLXXXIV')).toEqual(1984);
  expect(romanToArabic('MMCLVIII')).toEqual(2158);
});
