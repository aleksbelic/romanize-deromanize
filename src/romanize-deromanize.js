const { NUM_MAP, ROMAN_NUMERALS } = require('./helper.js');

/**
 * Converts given arabic number to roman.
 * @param {number|string} arabicNum arabic number that needs to be converted to roman number 
 * @returns {string} roman number for given arabic number
 * @example
 * romanize(671);
 * // returns 'DCLXXI'
 */
const romanize = (arabicNum) => {
  let romanNum = '';

  if (typeof arabicNum === 'string') {
    arabicNum = Number(arabicNum);
  }

  if (!Number.isInteger(arabicNum) || arabicNum <= 0) {
    throw Error('Number must be a positive integer.');
  }
  else if (arabicNum > 3999) {
    throw Error('The largest number that can be represented using roman numerals is 3999 (MMMCMXCIX).');
  }

  for (const [numMapRoman, numMapArabic] of NUM_MAP) {
    if (arabicNum === 0) break;

    while (arabicNum >= numMapArabic) {
      romanNum += numMapRoman;
      arabicNum -= numMapArabic;
    }
  }

  return romanNum;
}

/**
 * Converts given roman number to arabic.
 * @param {string} romanNum roman number that needs to be converted to arabic
 * @returns {number} arabic number for given roman number
 * @example
 * deromanize('CCXIV');
 * // returns 214
 */
const deromanize = (romanNum) => {
  let arabicNum = 0;
  romanNum = romanNum
    .toString()
    .replace(/\s+/g, '')
    .toUpperCase();

  let romanNumCharArray = Array.from(romanNum);

  // check for invalid numerals
  [...new Set(romanNumCharArray)].forEach(romanNumChar => { // only unique array elements
    if (!ROMAN_NUMERALS.includes(romanNumChar)) {
      throw new Error('Invalid roman numeral: ' + romanNumChar);
    }
  });

  romanNumCharArray.forEach((romanNumChar, index) => {
    if (NUM_MAP.get(romanNumChar) < NUM_MAP.get(romanNumCharArray[index + 1])) {
      arabicNum -= NUM_MAP.get(romanNumChar);
    }
    else {
      arabicNum += NUM_MAP.get(romanNumChar);
    }
  });

  if (romanize(arabicNum) !== romanNum) {
    throw new Error('Invalid roman number: ' + romanNum);
  }

  return arabicNum;
}

module.exports = {
  romanize,
  deromanize
}
