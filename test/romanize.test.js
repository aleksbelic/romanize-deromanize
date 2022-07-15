const { romanize } = require('../src/romanize-deromanize.js');

test('Basic rules', () => {
  expect(romanize(1)).toEqual('I');
  expect(romanize(4)).toEqual('IV');
  expect(romanize(5)).toEqual('V');
  expect(romanize(9)).toEqual('IX');
  expect(romanize(10)).toEqual('X');
  expect(romanize(40)).toEqual('XL');
  expect(romanize(50)).toEqual('L');
  expect(romanize(90)).toEqual('XC');
  expect(romanize(100)).toEqual('C');
  expect(romanize(400)).toEqual('CD');
  expect(romanize(500)).toEqual('D');
  expect(romanize(900)).toEqual('CM');
  expect(romanize(1000)).toEqual('M');
});

test('Arabic number is a string or some other data struct', () => {
  expect(() => romanize('   ')).toThrowError('Number must be a positive integer.');
  expect(() => romanize('abc')).toThrowError('Number must be a positive integer.');
  expect(() => romanize({ a: '1' })).toThrowError('Number must be a positive integer.');
  expect(() => romanize([1])).toThrowError('Number must be a positive integer.');
  expect(romanize('33')).toEqual('XXXIII');
});

test('Arabic number is not a positive intiger', () => {

  expect(() => romanize(1.45)).toThrowError('Number must be a positive integer.');
  expect(() => romanize(0)).toThrowError('Number must be a positive integer.');
  expect(() => romanize(-5)).toThrowError('Number must be a positive integer.');
});

test('Arabic number is greater than 3999', () => {
  expect(() => romanize(4000)).toThrowError('The largest number that can be represented using roman numerals is 3999 (MMMCMXCIX).');
});

test('Random arabic numbers', () => {
  expect(romanize(44)).toEqual('XLIV');
  expect(romanize(69)).toEqual('LXIX');
  expect(romanize(99)).toEqual('XCIX');
  expect(romanize(153)).toEqual('CLIII');
  expect(romanize(385)).toEqual('CCCLXXXV');
  expect(romanize(444)).toEqual('CDXLIV');
  expect(romanize(802)).toEqual('DCCCII');
  expect(romanize(811)).toEqual('DCCCXI');
  expect(romanize(999)).toEqual('CMXCIX');
  expect(romanize(1034)).toEqual('MXXXIV');
  expect(romanize(1174)).toEqual('MCLXXIV');
  expect(romanize(1201)).toEqual('MCCI');
  expect(romanize(1259)).toEqual('MCCLIX');
  expect(romanize(1310)).toEqual('MCCCX');
  expect(romanize(1873)).toEqual('MDCCCLXXIII');
  expect(romanize(1984)).toEqual('MCMLXXXIV');
  expect(romanize(2109)).toEqual('MMCIX');
  expect(romanize(2276)).toEqual('MMCCLXXVI');
  expect(romanize(2292)).toEqual('MMCCXCII');
  expect(romanize(2386)).toEqual('MMCCCLXXXVI');
  expect(romanize(2426)).toEqual('MMCDXXVI');
  expect(romanize(2438)).toEqual('MMCDXXXVIII');
  expect(romanize(2528)).toEqual('MMDXXVIII');
  expect(romanize(2748)).toEqual('MMDCCXLVIII');
  expect(romanize(3100)).toEqual('MMMC');
  expect(romanize(3129)).toEqual('MMMCXXIX');
  expect(romanize(3329)).toEqual('MMMCCCXXIX');
  expect(romanize(3512)).toEqual('MMMDXII');
});
