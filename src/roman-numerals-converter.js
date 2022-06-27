const { checkRomanNum, checkDecimalNum, sortMap } = require('./helper');

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
 * Converts given Roman numeral to decimal number.
 * @param {string} romanNum Roman numeral that needs to be converted to decimal number
 * @returns {number} decimal number for given Roman numeral
 */
const romanToDecimal = (romanNum) => {
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
 * @param {number} decimalNum decimal number that needs to be converted to Roman numeral 
 * @returns {string} Roman numeral for given decimal number
 */
const decimalToRoman = (decimalNum) => {
  let romanNum = '';

  if (checkDecimalNum(decimalNum)) {

    for (const [numMapRoman, numMapDecimal] of NUM_MAP) {
      if (decimalNum === 0) break;

      while (decimalNum >= numMapDecimal) {
        romanNum += numMapRoman;
        decimalNum -= numMapDecimal;
      }
    }

  }

  return romanNum;
}

module.exports = {
  romanToDecimal,
  decimalToRoman
}
