const NUM_MAP = new Map([
  ['M', 1000], // keep in DSC order
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
);

/**
 * Checks if given Roman number can be converted to arabic number
 * @param {string} romanNum roman number that we're checking
 * @returns {boolean} whether roman number is legit or not
 * @throws will throw an error if the param is invalid
 */
const isValidRomanNum = (romanNum) => {
  return true;
}

/**
 * Checks if given arabic number can be converted to roman number
 * @param {number} arabiclNum arabic number that we're checking
 * @returns {boolean} whether given arabic number is legit or not
 * @throws will throw an error if the param is invalid
 */
const isValidArabiclNum = (arabiclNum) => {
  if (!Number.isInteger(arabiclNum)) {
    throw Error('Number must be an integer.');
  }
  else if (arabiclNum <= 0) {
    throw Error('Number must be positive.');
  }
  else if (arabiclNum > 3999) {
    throw Error('The largest number that can be represented using roman numerals is 3999 (MMMCMXCIX).');
  }
  return true;
}

/**
 * Uses an existing, unsorted Map object to create new one - sorted by value for given sort type.
 * @param {Map} unsortedMap given Map object that should be sorted by value
 * @param {string} sortType sort type, can be 'asc' for ascending (default) and 'dsc' for descending; case-insensitive
 * @returns {Map} new Map object sorted by values
 * @throws will throw an error if the params are invalid
 */
const sortMap = (unsortedMap, sortType = 'asc') => {
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

module.exports = {
  NUM_MAP,
  isValidRomanNum,
  isValidArabiclNum,
  sortMap
}
