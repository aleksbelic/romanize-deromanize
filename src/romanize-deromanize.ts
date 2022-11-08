import {NUM_MAP} from './helper';

/**
 * Converts given arabic number to roman.
 *
 * @param arabicNum - arabic number that needs to be converted to roman number
 * @returns roman number for given arabic number
 * @example
 * romanize(671);
 * // returns 'DCLXXI'
 */
export const romanize = (arabicNum: number | string): string => {
  let romanNum = '';

  if (typeof arabicNum === 'string') {
    arabicNum = Number(arabicNum);
  }

  if (!Number.isInteger(arabicNum) || arabicNum <= 0) {
    throw new Error('Number must be a positive integer.');
  } else if (arabicNum > 3999) {
    throw new Error(
      'The largest number that can be represented using roman numerals is 3999 (MMMCMXCIX).'
    );
  }

  for (const [numMapRoman, numMapArabic] of NUM_MAP) {
    if (arabicNum === 0) break;

    while (arabicNum >= numMapArabic) {
      romanNum += numMapRoman;
      arabicNum -= numMapArabic;
    }
  }

  return romanNum;
};

/**
 * Converts given roman number to arabic.
 *
 * @param romanNum - roman number that needs to be converted to arabic
 * @returns arabic number for given roman number
 * @example
 * deromanize('CCXIV');
 * // returns 214
 */
export const deromanize = (romanNum: string): number => {
  let arabicNum = 0;
  romanNum = romanNum.toString().replace(/\s+/g, '').toUpperCase();

  const romanNumCharArray: string[] = Array.from(romanNum);

  romanNumCharArray.forEach((currentRomanNumChar: string, index: number) => {
    // search for invalid roman numerals
    const arabicValueForCurrentRomanNumChar: number | undefined =
      NUM_MAP.get(currentRomanNumChar);
    if (arabicValueForCurrentRomanNumChar === undefined) {
      throw new Error(`Invalid roman numeral: ${currentRomanNumChar}`);
    }

    let nextLowerArabicValue: number | undefined = NUM_MAP.get(
      romanNumCharArray[index + 1]
    );
    if (nextLowerArabicValue === undefined) {
      nextLowerArabicValue = 0;
    }

    if (arabicValueForCurrentRomanNumChar < nextLowerArabicValue) {
      arabicNum -= arabicValueForCurrentRomanNumChar;
    } else {
      arabicNum += arabicValueForCurrentRomanNumChar;
    }
  });

  if (romanize(arabicNum) !== romanNum) {
    throw new Error(`Invalid roman number: ${romanNum}`);
  }

  return arabicNum;
};
