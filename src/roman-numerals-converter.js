const { checkRomanNum, checkDecimalNum, sortMap } = require('./helper');

const NUM_MAP = new Map()
  .set('M', 1000)
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
 * @param {number} decimalNum 
 * @returns {string} Roman numeral for given decimal number
 */
const decimalToRoman = (decimalNum) => {
  let romanNum = '';

  if (checkDecimalNum(decimalNum)) {

    for (const [numMapRoman, numMapDecimal] of NUM_MAP) {
      if (decimalNum === 0) break;

      let decimalRatioFloor = Math.floor(decimalNum / numMapDecimal);

      if (decimalRatioFloor !== 0) {

        if (decimalRatioFloor > 3) {
          let lastRomanNumeral = romanNum.charAt(-1);
          console.log(lastRomanNumeral);
        }

        romanNum += numMapRoman.repeat(decimalRatioFloor);
        decimalNum -= decimalRatioFloor * numMapDecimal;
      }

    }


  }

  return romanNum;
}

module.exports = {
  romanToDecimal,
  decimalToRoman
}
