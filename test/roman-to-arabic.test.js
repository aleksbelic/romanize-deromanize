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

test('Invalid roman number - unknown numeral', () => {
  expect(() => romanToArabic('LXAX')).toThrowError('Invalid roman numeral: A');
});

test('Invalid roman number - more than 3 consecutive identical numerals', () => {
  expect(() => romanToArabic('IIII')).toThrowError('Invalid roman number, more than 3 consecutive, identical numerals: I');
  expect(() => romanToArabic('MMCCXXXX')).toThrowError('Invalid roman number, more than 3 consecutive, identical numerals: X');
});

test('Random roman numbers', () => {
  expect(romanToArabic('VII')).toEqual(7);
  expect(romanToArabic('XXXIV')).toEqual(34);
  expect(romanToArabic('XXXVII')).toEqual(37);
  expect(romanToArabic('XLIII')).toEqual(43);
  expect(romanToArabic('XLVIII')).toEqual(48);
  expect(romanToArabic('LII')).toEqual(52);
  expect(romanToArabic('LXIX')).toEqual(69);
  expect(romanToArabic('CXL')).toEqual(140);
  expect(romanToArabic('CXLV')).toEqual(145);
  expect(romanToArabic('CCXCVIII')).toEqual(298);
  expect(romanToArabic('CDI')).toEqual(401);
  expect(romanToArabic('DCLXVI')).toEqual(666);
  expect(romanToArabic('CMXCIX')).toEqual(999);
  expect(romanToArabic('MCMLXXXIV')).toEqual(1984);
  expect(romanToArabic('MMLXVI')).toEqual(2066);
  expect(romanToArabic('MMCLVIII')).toEqual(2158);
  expect(romanToArabic('MMMLXXIV')).toEqual(3074);
});
