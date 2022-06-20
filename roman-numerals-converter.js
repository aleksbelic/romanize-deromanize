const numMap = new Map();
numMap.set('M', 1000);
numMap.set('D', 500);
numMap.set('C', 100);
numMap.set('L', 50);
numMap.set('X', 10);
numMap.set('V', 5);
numMap.set('I', 1);

/**
 * TODO
 * @param {*} romanNum 
 * @returns 
 */
export function romanToDecimal(romanNum) {
  let decimalNum = 0;
  let romanNumCharArray = romanNum.toUpperCase().split('');

  romanNumCharArray.forEach((romanNumChar, index) => {
    if (numMap.get(romanNumChar) < numMap.get(romanNumCharArray[index + 1])) {
      decimalNum -= numMap.get(romanNumChar);
    }
    else {
      decimalNum += numMap.get(romanNumChar);
    }
  });

  return decimalNum;
}

/**
 * TODO
 * @param {*} decimalNum 
 * @returns 
 */
export function decimalToRoman(decimalNum) {
  let romanNum;
  return romanNum;
}
