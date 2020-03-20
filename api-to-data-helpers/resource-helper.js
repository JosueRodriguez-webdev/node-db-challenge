const db = require('../data/configDB')

module.exports = {
    find,
    add
}

function find() {
   return db('resource')
} // Done

function add(body, id) {
    return db('resource')
    .where({id})
    .insert(body)
} // Done