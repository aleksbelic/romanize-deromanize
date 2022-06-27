/**
 * TODO
 * @param {string} romanNum 
 * @returns {boolean} whether Roman numeral is legit or not
 */
const checkRomanNum = (romanNum) => {
  return true;
}

/**
 * Checks if given decimal number can be converted to Roman numerals.
 * @param {number} decimalNum 
 * @returns {boolean} whether decimal number is legit or not
 */
const checkDecimalNum = (decimalNum) => {
  if (!Number.isInteger(decimalNum)) {
    throw Error('Number must be an integer.');
  }
  else if (decimalNum <= 0) {
    throw Error('Number must be positive.');
  }
  else if (decimalNum > 3999) {
    throw Error('The largest number that can be represented in Roman numerals is 3999 (MMMCMXCIX).');
  }
  return true;
}

/**
 * //TODO
 * @param {Map} unsortedMap 
 * @param {string} sortType 
 * @returns {Map} new Map object sorted by values
 */
const sortMap = (unsortedMap, sortType = 'asc') => {
  if (!unsortedMap instanceof Map) {
    throw Error('Please provide map.')
  }
  if (sortType === 'asc') {
    return new Map([...unsortedMap.entries()].sort((a, b) => {
      return a[1] - b[1];
    }));
  }
  else if (sortType === 'dsc') {
    return new Map([...unsortedMap.entries()].sort((a, b) => {
      return a[1] + b[1];
    }));
  }
  else {
    throw Error('Sort type unknown, please use "asc" or "dsc".')
  }
}

module.exports = {
  checkRomanNum,
  checkDecimalNum,
  sortMap
}