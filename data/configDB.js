const knex = require('knex')

const dataBasePlug = require('../knexfile.js')

const db = knex(dataBasePlug.development)

module.exports = db