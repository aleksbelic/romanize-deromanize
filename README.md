# Romanize - deRomanize

## About
[Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals) are a numeral system that originated in [ancient Rome](https://en.wikipedia.org/wiki/Ancient_Rome) and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages.

This JavaScript module allows you to `convert Roman numbers to arabic and via versa` with ease.

## Installation
Add module to your project dependencies:
```
npm install romanize-deromanize
```

## Usage
Simply use the following two methods:
```
romanToArabic('CCXIV'); // returns 214
```
and
```
arabicToRoman(671); // returns 'DCLXXI'
```

## Testing
Unit tests are conducted using [Jest](https://jestjs.io/). Run all tests from project root using command:
```
npm t
```
or run single test suite by specifieing its name, e.g.:
```
npm t arabic-to-roman
```

## References
- [Arabic numerals on Wikipedia](https://en.wikipedia.org/wiki/Arabic_numerals)
- [Roman numerals on Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)
