'use strict'

const api = require('./api')
const ui = require('../ui')

const onGetAllBooks = function (event) {
  event.preventDefault()
  api.getAllBooks()
    .then(ui.getAllBooksSuccess)
    .catch(ui.apiCallFailure)
}

module.exports = {
  onGetAllBooks
}
