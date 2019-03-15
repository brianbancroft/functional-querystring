# A Querystring Parser

A quick little querystring parser which uses Ramda.

[![npm version](https://badge.fury.io/js/functional-querystring.svg)](https://badge.fury.io/js/functional-querystring)

## Usage

```js
const getQueryParams = require("functional-querystring");

const test = getQueryParams("?foo=bar");

test.foo; // bar
```
