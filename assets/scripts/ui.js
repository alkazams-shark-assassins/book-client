'use strict'

const store = require('./store')
const template = require('./books-listing.handlebars')

const getAllBooksSuccess = function (data) {
  store.updateBooks = data.books
  const allBooksHTML = template({books: store.updateBooks})
  $('#book-div').append.(allBooksHTML)
}

const apiCallFailure = function (error) {
  console.log(error)
}


module.exports  = {
getAllBooksSuccess,
apiCallFailure
   }
