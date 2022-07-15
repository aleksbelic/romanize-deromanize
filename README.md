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

Simply include the library

```
const { romanize, deromanize } = require('romanize-deromanize');
```

and use the following two methods:

```
romanize(214); // returns 'CCXIV'
```

```
deromanize('DCLXXI'); // returns 671
```

## Development

Code formatting is done by [Prettier](https://prettier.io/).
Simply format project files by following predefined rules in `.prettierrc.json`:
```
$ npx prettier --write .
```
To exclude files from formatting, please refer to `.prettierignore`, which corresponds to `.gitignore`.

## Testing

Unit tests are conducted using [Jest](https://jestjs.io/). Run all tests from project root using the following command:

```
$ npm t
```

or just run a single test suite by specifying its name, e.g.:

```
$ npm t romanize.test.js
```

## Issues

If you experience any problems or you just need an extra feature - feel free to create new [GitHub repo issue](https://github.com/aleksbelic/romanize-deromanize/issues).

## References

- [Arabic numerals on Wikipedia](https://en.wikipedia.org/wiki/Arabic_numerals)
- [Roman numerals on Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)
