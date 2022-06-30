const NUM_MAP = new Map()
  .set('M', 1000) // keep in DSC order
  .set('CM', 900)
  .set('D', 500)
  .set('CD', 400)
  .set('C', 100)
  .set('XC', 90)
  .set('L', 50)
  .set('XL', 40)
  .set('X', 10)
  .set('IX', 9)
  .set('V', 5)
  .set('IV', 4)
  .set('I', 1);

/**
 * Checks if given Roman number can be converted to arabic number
 * @param {string} romanNum 
 * @returns {boolean} whether roman number is legit or not
 */
const checkRomanNum = (romanNum) => {
  return true;
}

/**
 * Checks if given arabic number can be converted to roman number
 * @param {number} arabiclNum 
 * @returns {boolean} whether given arabic number is legit or not
 */
const checkArabiclNum = (arabiclNum) => {
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
  NUM_MAP,
  checkRomanNum,
  checkArabiclNum,
  sortMap
}