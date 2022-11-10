/**
 * Uses an existing, unsorted Map object to create new one - sorted by value for given sort type.
 *
 * @param unsortedMap - given Map object that should be sorted by value
 * @param sortType - 'asc' for ascending (default) or 'dsc' for descending; case-insensitive
 * @returns new Map object sorted by values
 * @throws an error if the params are invalid
 * @example
 * sortMap(new Map([['b', 2],['c', 3],['a', 1]]));
 * // returns new Map([['a', 1],['b', 2],['c', 3]])
 */
export const sortMap = (
  unsortedMap: Map<string, number>,
  sortType = 'asc'
): Map<string, number> => {
  if (!(unsortedMap instanceof Map)) {
    throw new Error('Please provide Map object.');
  }
  if (sortType.toLowerCase() === 'asc') {
    return new Map(
      [...unsortedMap.entries()].sort((a, b) => {
        return a[1] - b[1];
      })
    );
  } else if (sortType.toLowerCase() === 'dsc') {
    return new Map(
      [...unsortedMap.entries()].sort((a, b) => {
        return b[1] - a[1];
      })
    );
  } else {
    throw new Error(
      'Sort type unknown, please use "asc" for ascending or "dsc" for descending.'
    );
  }
};

export const NUM_MAP: Map<string, number> = sortMap(
  new Map([
    ['M', 1000],
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
    ['I', 1],
  ]),
  'dsc'
);

export const ROMAN_NUMERALS: string[] = Array.from(NUM_MAP.keys()).filter(
  romanNumeral => romanNumeral.length === 1
);
