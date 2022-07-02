const { arabicToRoman } = require('../src/romanize-deromanize')

test('Basic rules', () => {
  expect(arabicToRoman(1)).toEqual('I');
  expect(arabicToRoman(4)).toEqual('IV');
  expect(arabicToRoman(5)).toEqual('V');
  expect(arabicToRoman(9)).toEqual('IX');
  expect(arabicToRoman(10)).toEqual('X');
  expect(arabicToRoman(40)).toEqual('XL');
  expect(arabicToRoman(50)).toEqual('L');
  expect(arabicToRoman(90)).toEqual('XC');
  expect(arabicToRoman(100)).toEqual('C');
  expect(arabicToRoman(400)).toEqual('CD');
  expect(arabicToRoman(500)).toEqual('D');
  expect(arabicToRoman(900)).toEqual('CM');
  expect(arabicToRoman(1000)).toEqual('M');
});

test('Arabic number is not an intiger', () => {
  expect(() => arabicToRoman('   ')).toThrowError('Number must be an integer.');
  expect(() => arabicToRoman(1.45)).toThrowError('Number must be an integer.');
  expect(() => arabicToRoman('33')).toThrowError('Number must be an integer.');
  expect(() => arabicToRoman('abc')).toThrowError('Number must be an integer.');
});

test('Arabic number is not positive', () => {
  expect(() => arabicToRoman(0)).toThrowError('Number must be positive.');
  expect(() => arabicToRoman(-5)).toThrowError('Number must be positive.');
});

test('Arabic number is greater than 3999', () => {
  expect(() => arabicToRoman(4000)).toThrowError('The largest number that can be represented using roman numerals is 3999 (MMMCMXCIX).');
});

test('Random arabic numbers', () => {
  expect(arabicToRoman(44)).toEqual('XLIV');
  expect(arabicToRoman(69)).toEqual('LXIX');
  expect(arabicToRoman(99)).toEqual('XCIX');
  expect(arabicToRoman(153)).toEqual('CLIII');
  expect(arabicToRoman(385)).toEqual('CCCLXXXV');
  expect(arabicToRoman(444)).toEqual('CDXLIV');
  expect(arabicToRoman(802)).toEqual('DCCCII');
  expect(arabicToRoman(811)).toEqual('DCCCXI');
  expect(arabicToRoman(999)).toEqual('CMXCIX');
  expect(arabicToRoman(1034)).toEqual('MXXXIV');
  expect(arabicToRoman(1174)).toEqual('MCLXXIV');
  expect(arabicToRoman(1201)).toEqual('MCCI');
  expect(arabicToRoman(1259)).toEqual('MCCLIX');
  expect(arabicToRoman(1310)).toEqual('MCCCX');
  expect(arabicToRoman(1873)).toEqual('MDCCCLXXIII');
  expect(arabicToRoman(1984)).toEqual('MCMLXXXIV');
  expect(arabicToRoman(2109)).toEqual('MMCIX');
  expect(arabicToRoman(2276)).toEqual('MMCCLXXVI');
  expect(arabicToRoman(2292)).toEqual('MMCCXCII');
  expect(arabicToRoman(2386)).toEqual('MMCCCLXXXVI');
  expect(arabicToRoman(2426)).toEqual('MMCDXXVI');
  expect(arabicToRoman(2438)).toEqual('MMCDXXXVIII');
  expect(arabicToRoman(2528)).toEqual('MMDXXVIII');
  expect(arabicToRoman(2748)).toEqual('MMDCCXLVIII');
  expect(arabicToRoman(3100)).toEqual('MMMC');
  expect(arabicToRoman(3129)).toEqual('MMMCXXIX');
  expect(arabicToRoman(3329)).toEqual('MMMCCCXXIX');
  expect(arabicToRoman(3512)).toEqual('MMMDXII');
});
