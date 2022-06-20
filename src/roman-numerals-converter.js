const NUM_MAP = new Map()
  .set('M', 1000) // keep in DSC order
  .set('D', 500)
  .set('C', 100)
  .set('L', 50)
  .set('X', 10)
  .set('V', 5)
  .set('I', 1);

/**
 * TODO
 * @param {string} romanNum 
 * @returns 
 */
function romanToDecimal(romanNum) {
  let decimalNum = 0;
  let romanNumCharArray = romanNum.toUpperCase().split('');

  romanNumCharArray.forEach((romanNumChar, index) => {
    if (NUM_MAP.get(romanNumChar) < NUM_MAP.get(romanNumCharArray[index + 1])) {
      decimalNum -= NUM_MAP.get(romanNumChar);
    }
    else {
      decimalNum += NUM_MAP.get(romanNumChar);
    }
  });

  return decimalNum;
}

/**
 * Converts given decimal number to Roman numeral.
 * @param {number} decimalNum 
 * @returns {string} Roman numeral for given decimal number
 */
function decimalToRoman(decimalNum) {
  let romanNum = '';
  if (checkDecimalNum(decimalNum)) {
    /*
    NUM_MAP
    while (decimalNum !== 0) {
      for ()
    }
    */
  }

  return romanNum;
}

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
  romanToDecimal,
  decimalToRoman
}
