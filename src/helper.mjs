/**
 * Uses an existing, unsorted Map object to create new one - sorted by value for given sort type.
 * @param {Map} unsortedMap given Map object that should be sorted by value
 * @param {string} sortType sort type, can be 'asc' for ascending (default) and 'dsc' for descending; case-insensitive
 * @returns {Map} new Map object sorted by values
 * @throws will throw an error if the params are invalid
 */
export const sortMap = (unsortedMap, sortType = 'asc') => {
  if (!(unsortedMap instanceof Map)) {
    throw Error('Please provide Map object.')
  }
  if (sortType.toLowerCase() === 'asc') {
    return new Map([...unsortedMap.entries()].sort((a, b) => {
      return a[1] - b[1];
    }));
  }
  else if (sortType.toLowerCase() === 'dsc') {
    return new Map([...unsortedMap.entries()].sort((a, b) => {
      return b[1] - a[1];
    }));
  }
  else {
    throw Error('Sort type unknown, please use "asc" for ascending or "dsc" for descending.')
  }
}

export const NUM_MAP = sortMap(new Map([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]]
), 'dsc');

export const ROMAN_NUMERALS = Array
  .from(NUM_MAP.keys())
  .filter(romanNumeral => romanNumeral.length === 1);
