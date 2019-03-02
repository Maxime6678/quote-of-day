const randomQuote = require('rand-quote')

randomQuote({
    quoteIt: true,
    body: true,
    author: false
}).then((quote) => console.log(quote))