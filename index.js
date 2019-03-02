const axios = require('axios')

module.exports = function (config) {
    config = (typeof config === 'undefined') ? {
        quoteIt: true,
        body: true,
        author: true
    } : config
    if (typeof config.quoteIt === 'undefined') config.quoteIt = true
    if (typeof config.body === 'undefined') config.body = true
    if (typeof config.author === 'undefined') config.author = true

    return new Promise((resolve, reject) => {
        axios.get('https://favqs.com/api/qotd', {
            responseType: 'json'
        }).then((response) => {
            resolve(config.body ? (config.quoteIt ? '"' : '') + response.data.quote.body + (config.quoteIt ? '"' : '') + (config.author ? ' -' + response.data.quote.author : '') : config.author ? response.data.quote.author : '')
        }).catch((err) => reject(err))
    })
}