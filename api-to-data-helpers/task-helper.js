const db = require('../data/configDB')

module.exports = {
    find,
    add
}

function find() {
   return db('task')
} // Done

function add(body, id) {
    return db('task')
    .where({id})
    .insert(body)
} // Done