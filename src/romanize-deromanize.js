const { checkRomanNum, checkArabiclNum, NUM_MAP } = require('./helper');

/**
 * Converts given roman number to arabic.
 * @param {string} romanNum roman number that needs to be converted to arabic
 * @returns {number} arabic number for given roman number
 * @example
 * romanToArabic('CCXIV');
 * // returns 214
 */
const romanToArabic = (romanNum) => {
  let arabicNum = 0;
  let romanNumCharArray = romanNum
    .replace(/\s+/g, '')
    .toUpperCase()
    .split('');

  // if (checkRomanNum(romanNum)) {} TODO

  romanNumCharArray.forEach((romanNumChar, index) => {
    if (NUM_MAP.get(romanNumChar) < NUM_MAP.get(romanNumCharArray[index + 1])) {
      arabicNum -= NUM_MAP.get(romanNumChar);
    }
    else {
      arabicNum += NUM_MAP.get(romanNumChar);
    }
  });

  return arabicNum;
}

/**
 * Converts given arabic number to roman.
 * @param {number} arabicNum arabic number that needs to be converted to roman number 
 * @returns {string} roman number for given arabic number
 * @example
 * arabicToRoman(671);
 * // returns 'DCLXXI'
 */
const arabicToRoman = (arabicNum) => {
  let romanNum = '';

  if (checkArabiclNum(arabicNum)) {

    for (const [numMapRoman, numMapArabic] of NUM_MAP) {
      if (arabicNum === 0) break;

      while (arabicNum >= numMapArabic) {
        romanNum += numMapRoman;
        arabicNum -= numMapArabic;
      }
    }

  }

  return romanNum;
}

module.exports = {
  romanToArabic,
  arabicToRoman
}
