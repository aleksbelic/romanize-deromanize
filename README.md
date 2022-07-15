# romanize &harr; deromanize

## About
[Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals) are a numeral system that originated in [ancient Rome](https://en.wikipedia.org/wiki/Ancient_Rome) and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages.

This javascript module allows you to `convert roman numbers to arabic and vice versa` with ease.

## Installation
Add module to your project dependencies:
```
$ npm install romanize-deromanize
```

## Usage
Simply use the following two methods:
```
romanize('CCXIV'); // returns 214
```
and
```
deromanize(671); // returns 'DCLXXI'
```

## Testing
Unit tests are conducted using [Jest](https://jestjs.io/). Run all tests from project root using command:
```
$ npm t
```
or just run a single test suite by specifying its name, e.g.:
```
$ npm t romanize.test.js
```

## References
- [Arabic numerals on Wikipedia](https://en.wikipedia.org/wiki/Arabic_numerals)
- [Roman numerals on Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)
