# rand-quote

[![npm version](https://img.shields.io/npm/v/rand-quote.svg)](https://www.npmjs.com/package/rand-quote)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/rand-quote.svg)](https://www.npmjs.com/package/rand-quote)

Get a random quote provide by https://favqs.com

## Install

```
$ npm install rand-quote
```

## Usage

```js
const randomQuote = require('rand-quote')

randomQuote().then((quote) => console.log(quote))
//=> "The great fun in my life has been getting up every morning and rushing to the typewriter because some new idea has hit me." -Ray Bradbury
```

## Methods

##### randomQuote([config])

```js
randomQuote().then((quote) => console.log(quote))
//=> "The great fun in my life has been getting up every morning and rushing to the typewriter because some new idea has hit me." -Ray Bradbury

randomQuote({
    quoteIt: true,
    body: true,
    author: false
}).then((quote) => console.log(quote))
//=> "The great fun in my life has been getting up every morning and rushing to the typewriter because some new idea has hit me."
```

## Config

These are the available config options. No one is required. Everything is set to `true` by default.

```js
{
    // Set to 'true', if you want to have '"quote"' or false will give you 'quote'
    quoteIt: true, // default

    // Set to 'true', if you want to have the body of the quote
    body: true, // default

    // Set to 'true', if you want to have the author name of the quote
    author: true // default
}
```

## Test

```
$ git clone https://github.com/Maxime6678/rand-quote
$ npm install
$ node exemple/simple.js
```

## License

[MIT](https://github.com/Maxime6678/rand-quote/blob/master/LICENSE)