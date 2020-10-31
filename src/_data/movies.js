'use strict'

const Cache = require('@11ty/eleventy-cache-assets')

module.exports = async function () {
  return Cache('https://ghibliapi.herokuapp.com/films/', { type: 'json' })
}
