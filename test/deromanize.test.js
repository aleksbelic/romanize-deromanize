import { deromanize } from '../src/romanize-deromanize.mjs';

test('Basic roman numerals', () => {
  expect(deromanize('I')).toEqual(1);
  expect(deromanize('V')).toEqual(5);
  expect(deromanize('X')).toEqual(10);
  expect(deromanize('L')).toEqual(50);
  expect(deromanize('C')).toEqual(100);
  expect(deromanize('D')).toEqual(500);
  expect(deromanize('M')).toEqual(1000);
});

test('Roman number is lower case', () => {
  expect(deromanize('i')).toEqual(1);
  expect(deromanize('xXxIiI')).toEqual(33);
});

test('Roman number contains whitespace', () => {
  expect(deromanize(' M CCC L XXX I X ')).toEqual(1389);
});

test('Invalid roman number - unknown numeral', () => {
  expect(() => deromanize('LXAX')).toThrowError('Invalid roman numeral: A');
});

test('Invalid roman number - more than 3 successive identical numerals', () => {
  expect(() => deromanize('IIII')).toThrowError('Invalid roman number: IIII');
  expect(() => deromanize('MMCCXXXX')).toThrowError('Invalid roman number: MMCCXXXX');
});

test('Invalid roman number - numerals V, L & D can\'t be successively repeated', () => {
  expect(() => deromanize('VVI')).toThrowError('Invalid roman number: VVI');
  expect(() => deromanize('MDCLL')).toThrowError('Invalid roman number: MDCLL');
  expect(() => deromanize('MMDDD')).toThrowError('Invalid roman number: MMDDD');
});

test('Invalid roman number: false order of numerals', () => {
  expect(() => deromanize('XXC')).toThrowError('Invalid roman number: XXC');
  expect(() => deromanize('CCCD')).toThrowError('Invalid roman number: CCCD');
  expect(() => deromanize('CMCM')).toThrowError('Invalid roman number: CMCM');
});

test('Random roman numbers', () => {
  expect(deromanize('VII')).toEqual(7);
  expect(deromanize('XXXIV')).toEqual(34);
  expect(deromanize('XXXVII')).toEqual(37);
  expect(deromanize('XLIII')).toEqual(43);
  expect(deromanize('XLVIII')).toEqual(48);
  expect(deromanize('LII')).toEqual(52);
  expect(deromanize('LXIX')).toEqual(69);
  expect(deromanize('CXL')).toEqual(140);
  expect(deromanize('CXLV')).toEqual(145);
  expect(deromanize('CCXCVIII')).toEqual(298);
  expect(deromanize('CDI')).toEqual(401);
  expect(deromanize('DCLXVI')).toEqual(666);
  expect(deromanize('CMXCIX')).toEqual(999);
  expect(deromanize('MCMLXXXIV')).toEqual(1984);
  expect(deromanize('MMLXVI')).toEqual(2066);
  expect(deromanize('MMCLVIII')).toEqual(2158);
  expect(deromanize('MMMLXXIV')).toEqual(3074);
});
