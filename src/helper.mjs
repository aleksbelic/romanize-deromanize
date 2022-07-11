export const NUM_MAP = new Map([
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

export const ROMAN_NUMERALS = Array
  .from(NUM_MAP.keys())
  .filter(romanNumeral => romanNumeral.length === 1);

/**
 * Checks if given roman number can be converted to arabic number
 * @param {string} romanNum roman number that we're checking
 * @returns {boolean} whether roman number is valid or not
 * @throws will throw an error if the param is invalid
 */
export const isValidRomanNum = (romanNum) => {
  let romanNumCharArray = Array.from(romanNum);

  // check for invalid numerals
  [...new Set(romanNumCharArray)].forEach(romanNumChar => { // only unique array elements
    if (!ROMAN_NUMERALS.includes(romanNumChar)) {
      throw new Error('Invalid roman numeral: ' + romanNumChar);
    }
  });

  // check for more than 3 consecutive identical numerals, e.g. "IIII"
  let consecutiveRomanCharCount = 0;
  romanNumCharArray.forEach((romanNumChar, index) => {
    consecutiveRomanCharCount = (romanNumChar === romanNumCharArray[index - 1]) ? ++consecutiveRomanCharCount : 0;
    if (consecutiveRomanCharCount >= 3) {
      throw new Error('Invalid roman number, more than 3 consecutive, identical numerals: ' + romanNumChar);
    }
  });

  // sme da bude ispred većeg do 2 naredna veća stepena TODO
  // smeju da se ponovi samo 1 ispred većeg TODO

  return true;
}

/**
 * Uses an existing, unsorted Map object to create new one - sorted by value for given sort type.
 * @param {Map} unsortedMap given Map object that should be sorted by value
 * @param {string} sortType sort type, can be 'asc' for ascending (default) and 'dsc' for descending; case-insensitive
 * @returns {Map} new Map object sorted by values
 * @throws will throw an error if the params are invalid
 */
export const sortMap = (unsortedMap, sortType = 'asc') => {
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
