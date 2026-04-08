import {test, expect} from '@jest/globals';
import {deromanize} from '../src/romanize-deromanize';

test('Basic roman numerals', () => {
  expect(deromanize('I')).toEqual(1);
  expect(deromanize('V')).toEqual(5);
  expect(deromanize('X')).toEqual(10);
  expect(deromanize('L')).toEqual(50);
  expect(deromanize('C')).toEqual(100);
  expect(deromanize('D')).toEqual(500);
  expect(deromanize('M')).toEqual(1000);
});

test('Roman number is not a string', () => {
  // @ts-expect-error - need to ignore this error to test the function's behavior when a non-string param is provided
  expect(() => deromanize(39)).toThrow(
    new Error('Input must be a string representing a Roman numeral')
  );
  // @ts-expect-error - need to ignore this error to test the function's behavior when a non-string param is provided
  expect(() => deromanize([39])).toThrow(
    new Error('Input must be a string representing a Roman numeral')
  );
});

test('Roman number is lower case', () => {
  expect(deromanize('i')).toEqual(1);
  expect(deromanize('xXxIiI')).toEqual(33);
});

test('Roman number contains whitespace', () => {
  expect(deromanize(' M CCC L XXX I X ')).toEqual(1389);
});

test('Invalid roman number - unknown numeral', () => {
  expect(() => deromanize('LXXA')).toThrow(
    new Error('Invalid roman numeral: A')
  );
  expect(() => deromanize('LXAX')).toThrow(
    new Error('Invalid roman numeral: A')
  );
  expect(() => deromanize('XA')).toThrow(new Error('Invalid roman numeral: A'));
  expect(() => deromanize('A')).toThrow(new Error('Invalid roman numeral: A'));
});

test('Invalid roman number - more than 3 successive identical numerals', () => {
  expect(() => deromanize('IIII')).toThrow(
    new Error('Invalid roman number: IIII')
  );
  expect(() => deromanize('MMCCXXXX')).toThrow(
    new Error('Invalid roman number: MMCCXXXX')
  );
});

test("Invalid roman number - numerals V, L & D can't be successively repeated", () => {
  expect(() => deromanize('VVI')).toThrow(
    new Error('Invalid roman number: VVI')
  );
  expect(() => deromanize('MDCLL')).toThrow(
    new Error('Invalid roman number: MDCLL')
  );
  expect(() => deromanize('MMDDD')).toThrow(
    new Error('Invalid roman number: MMDDD')
  );
});

test('Invalid roman number: false order of numerals', () => {
  expect(() => deromanize('XXC')).toThrow(
    new Error('Invalid roman number: XXC')
  );
  expect(() => deromanize('CCCD')).toThrow(
    new Error('Invalid roman number: CCCD')
  );
  expect(() => deromanize('CMCM')).toThrow(
    new Error('Invalid roman number: CMCM')
  );
  expect(() => deromanize('IVXCM')).toThrow(
    new Error('Invalid roman number: IVXCM')
  );
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
