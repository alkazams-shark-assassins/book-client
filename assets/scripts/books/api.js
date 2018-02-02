'use strict'

const config = require('../config')

const getAllBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  getAllBooks
}
