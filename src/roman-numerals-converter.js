const { checkRomanNum, checkDecimalNum } = require('./helper');

const NUM_MAP = new Map()
  .set('M', 1000) // keep in DSC order
  .set('D', 500)
  .set('C', 100)
  .set('L', 50)
  .set('X', 10)
  .set('V', 5)
  .set('I', 1);

/**
 * Converts given Roman numeral to decimal number.
 * @param {string} romanNum 
 * @returns {number} decimal number for given Roman numeral
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

module.exports = {
  romanToDecimal,
  decimalToRoman
}
