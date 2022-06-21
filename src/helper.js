/**
 * TODO
 * @param {string} romanlNum 
 * @returns {boolean} whether Roman numeral is legit or not
 */
function checkRomanNum(romanlNum) {
  return true;
}

/**
 * Checks if given decimal number can be converted to Roman numerals.
 * @param {number} decimalNum 
 * @returns {boolean} whether decimal number is legit or not
 */
function checkDecimalNum(decimalNum) {
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

module.exports = {
  checkRomanNum,
  checkDecimalNum
}