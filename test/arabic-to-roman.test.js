const { arabicToRoman } = require('../src/romanize-deromanize')

test('Basic rules', () => {
  expect(arabicToRoman(1)).toBe('I');
  expect(arabicToRoman(4)).toBe('IV');
  expect(arabicToRoman(5)).toBe('V');
  expect(arabicToRoman(9)).toBe('IX');
  expect(arabicToRoman(10)).toBe('X');
  expect(arabicToRoman(40)).toBe('XL');
  expect(arabicToRoman(50)).toBe('L');
  expect(arabicToRoman(90)).toBe('XC');
  expect(arabicToRoman(100)).toBe('C');
  expect(arabicToRoman(400)).toBe('CD');
  expect(arabicToRoman(500)).toBe('D');
  expect(arabicToRoman(900)).toBe('CM');
  expect(arabicToRoman(1000)).toBe('M');
});

test('Given number is not an intiger', () => {
  expect(() => {
    arabicToRoman('   ');
  }).toThrowError('Number must be an integer.');
  expect(() => {
    arabicToRoman(1.45);
  }).toThrowError('Number must be an integer.');
  expect(() => {
    arabicToRoman('33');
  }).toThrowError('Number must be an integer.');
  expect(() => {
    arabicToRoman('abc');
  }).toThrowError('Number must be an integer.');
});

test('Given number is not positive', () => {
  expect(() => {
    arabicToRoman(0);
  }).toThrowError('Number must be positive.');
  expect(() => {
    arabicToRoman(-5);
  }).toThrowError('Number must be positive.');
});

test('Given number is greater than 3999', () => {
  expect(() => {
    arabicToRoman(4000);
  }).toThrowError('The largest number that can be represented using roman numerals is 3999 (MMMCMXCIX).');
});

test('Random arabic numbers', () => {
  expect(arabicToRoman(44)).toBe('XLIV');
  expect(arabicToRoman(69)).toBe('LXIX');
  expect(arabicToRoman(99)).toBe('XCIX');
  expect(arabicToRoman(153)).toBe('CLIII');
  expect(arabicToRoman(385)).toBe('CCCLXXXV');
  expect(arabicToRoman(444)).toBe('CDXLIV');
  expect(arabicToRoman(802)).toBe('DCCCII');
  expect(arabicToRoman(811)).toBe('DCCCXI');
  expect(arabicToRoman(999)).toBe('CMXCIX');
  expect(arabicToRoman(1034)).toBe('MXXXIV');
  expect(arabicToRoman(1174)).toBe('MCLXXIV');
  expect(arabicToRoman(1201)).toBe('MCCI');
  expect(arabicToRoman(1259)).toBe('MCCLIX');
  expect(arabicToRoman(1310)).toBe('MCCCX');
  expect(arabicToRoman(1873)).toBe('MDCCCLXXIII');
  expect(arabicToRoman(1984)).toBe('MCMLXXXIV');
  expect(arabicToRoman(2109)).toBe('MMCIX');
  expect(arabicToRoman(2276)).toBe('MMCCLXXVI');
  expect(arabicToRoman(2292)).toBe('MMCCXCII');
  expect(arabicToRoman(2386)).toBe('MMCCCLXXXVI');
  expect(arabicToRoman(2426)).toBe('MMCDXXVI');
  expect(arabicToRoman(2438)).toBe('MMCDXXXVIII');
  expect(arabicToRoman(2528)).toBe('MMDXXVIII');
  expect(arabicToRoman(2748)).toBe('MMDCCXLVIII');
  expect(arabicToRoman(3100)).toBe('MMMC');
  expect(arabicToRoman(3129)).toBe('MMMCXXIX');
  expect(arabicToRoman(3329)).toBe('MMMCCCXXIX');
  expect(arabicToRoman(3512)).toBe('MMMDXII');
});
