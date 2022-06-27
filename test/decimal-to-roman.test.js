const { decimalToRoman } = require('../src/roman-numerals-converter')

test('Basic rules', () => {
  expect(decimalToRoman(1)).toBe('I');
  expect(decimalToRoman(4)).toBe('IV');
  expect(decimalToRoman(5)).toBe('V');
  expect(decimalToRoman(9)).toBe('IX');
  expect(decimalToRoman(10)).toBe('X');
  expect(decimalToRoman(40)).toBe('XL');
  expect(decimalToRoman(50)).toBe('L');
  expect(decimalToRoman(90)).toBe('XC');
  expect(decimalToRoman(100)).toBe('C');
  expect(decimalToRoman(400)).toBe('CD');
  expect(decimalToRoman(500)).toBe('D');
  expect(decimalToRoman(900)).toBe('CM');
  expect(decimalToRoman(1000)).toBe('M');
});

test('Given number is not an intiger', () => {
  expect(() => {
    decimalToRoman('   ');
  }).toThrowError('Number must be an integer.');
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

test('Given number is not positive', () => {
  expect(() => {
    decimalToRoman(0);
  }).toThrowError('Number must be positive.');
  expect(() => {
    decimalToRoman(-5);
  }).toThrowError('Number must be positive.');
});

test('Given number is greater than 3999', () => {
  expect(() => {
    decimalToRoman(4000);
  }).toThrowError('The largest number that can be represented in Roman numerals is 3999 (MMMCMXCIX).');
});

test('Random decimal numbers', () => {
  expect(decimalToRoman(44)).toBe('XLIV');
  expect(decimalToRoman(69)).toBe('LXIX');
  expect(decimalToRoman(99)).toBe('XCIX');
  expect(decimalToRoman(153)).toBe('CLIII');
  expect(decimalToRoman(385)).toBe('CCCLXXXV');
  expect(decimalToRoman(444)).toBe('CDXLIV');
  expect(decimalToRoman(802)).toBe('DCCCII');
  expect(decimalToRoman(811)).toBe('DCCCXI');
  expect(decimalToRoman(999)).toBe('CMXCIX');
  expect(decimalToRoman(1034)).toBe('MXXXIV');
  expect(decimalToRoman(1174)).toBe('MCLXXIV');
  expect(decimalToRoman(1201)).toBe('MCCI');
  expect(decimalToRoman(1259)).toBe('MCCLIX');
  expect(decimalToRoman(1310)).toBe('MCCCX');
  expect(decimalToRoman(1873)).toBe('MDCCCLXXIII');
  expect(decimalToRoman(1984)).toBe('MCMLXXXIV');
  expect(decimalToRoman(2109)).toBe('MMCIX');
  expect(decimalToRoman(2276)).toBe('MMCCLXXVI');
  expect(decimalToRoman(2292)).toBe('MMCCXCII');
  expect(decimalToRoman(2386)).toBe('MMCCCLXXXVI');
  expect(decimalToRoman(2426)).toBe('MMCDXXVI');
  expect(decimalToRoman(2438)).toBe('MMCDXXXVIII');
  expect(decimalToRoman(2528)).toBe('MMDXXVIII');
  expect(decimalToRoman(2748)).toBe('MMDCCXLVIII');
  expect(decimalToRoman(3100)).toBe('MMMC');
  expect(decimalToRoman(3129)).toBe('MMMCXXIX');
  expect(decimalToRoman(3329)).toBe('MMMCCCXXIX');
  expect(decimalToRoman(3512)).toBe('MMMDXII');
});
