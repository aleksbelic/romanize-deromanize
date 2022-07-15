const { sortMap } = require('../src/helper.js');

let unsortedMap = new Map([['b', 2], ['c', 3], ['a', 1]]);
let sortedMapAsc = new Map([['a', 1], ['b', 2], ['c', 3]]);
let sortedMapDsc = new Map([['c', 3], ['b', 2], ['a', 1]]);

// Basic
test('Sort map - invalid Map object param', () => {
  const notMap = { a: 1, b: 2, c: 3 };
  expect(() => sortMap(notMap)).toThrowError('Please provide Map object.');
});
test('Sort map - default sort type param', () => {
  expect([...(sortMap(unsortedMap))].toString()).toEqual([...sortedMapAsc].toString());
});
test('Sort map - unknown sort type param', () => {
  expect(() => sortMap(unsortedMap, 'some_unknown_sort_type')).toThrowError('Sort type unknown, please use "asc" for ascending or "dsc" for descending.');
});

// ASC sort
test('Sort map ASC - negative test', () => {
  expect([...unsortedMap].toString()).not.toEqual([...sortedMapAsc].toString());
});
test('Sort map ASC', () => {
  expect([...(sortMap(unsortedMap, 'asc'))].toString()).toEqual([...sortedMapAsc].toString());
});
test('Sort map ASC - case-sensitive', () => {
  expect([...(sortMap(unsortedMap, 'ASC'))].toString()).toEqual([...sortedMapAsc].toString());
});

// DSC sort
test('Sort map DSC - negative test', () => {
  expect([...unsortedMap].toString()).not.toEqual([...sortedMapDsc].toString());
});
test('Sort map DSC', () => {
  expect([...(sortMap(unsortedMap, 'dsc'))].toString()).toEqual([...sortedMapDsc].toString());
});
test('Sort map DSC - case-sensitive', () => {
  expect([...(sortMap(unsortedMap, 'DSC'))].toString()).toEqual([...sortedMapDsc].toString());
});
