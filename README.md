# romanize &harr; deromanize

[![GitHub release](https://img.shields.io/github/release/aleksbelic/romanize-deromanize.svg)](https://GitHub.com/aleksbelic/romanize-deromanize/releases/)
![testing workflow](https://github.com/aleksbelic/romanize-deromanize/actions/workflows/tests.yml/badge.svg)
[![GitHub license](https://img.shields.io/github/license/aleksbelic/romanize-deromanize)](https://raw.githubusercontent.com/aleksbelic/romanize-deromanize/main/LICENSE.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
const {romanize, deromanize} = require('romanize-deromanize');
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
$ npm run pretty
```

which is an alias for:

```
$ npx prettier --write .
```

To exclude files from formatting, please refer to `.prettierignore` (corresponds to `.gitignore`).

Identifying problematic patterns is covered by static code analysis tool [ESLint](https://eslint.org/):

```
$ npm run lint
```

which is an alias for:

```
$ npx eslint .
```

Linting config can be found in `.eslintrc.json`.

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
