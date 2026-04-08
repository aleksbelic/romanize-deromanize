import {test, expect} from '@jest/globals';

/**
 * Integration test for require() usage
 * Tests that the built CommonJS module can be required and used correctly
 */
test('require() - romanize basic functionality', () => {
  const {romanize} = require('../dist/romanize-deromanize');

  expect(romanize(1)).toBe('I');
  expect(romanize(4)).toBe('IV');
  expect(romanize(9)).toBe('IX');
  expect(romanize(42)).toBe('XLII');
  expect(romanize(3999)).toBe('MMMCMXCIX');
});

test('require() - deromanize basic functionality', () => {
  const {deromanize} = require('../dist/romanize-deromanize');

  expect(deromanize('I')).toBe(1);
  expect(deromanize('IV')).toBe(4);
  expect(deromanize('IX')).toBe(9);
  expect(deromanize('XLII')).toBe(42);
  expect(deromanize('MMMCMXCIX')).toBe(3999);
});

test('require() - round trip conversion', () => {
  const {romanize, deromanize} = require('../dist/romanize-deromanize');

  const testNumbers = [1, 4, 9, 42, 99, 400, 500, 900, 1000, 3999];

  testNumbers.forEach(num => {
    const roman = romanize(num);
    const back = deromanize(roman);
    expect(back).toBe(num);
  });
});
