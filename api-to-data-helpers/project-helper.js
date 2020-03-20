const db = require('../data/configDB')

module.exports = {
    find,
    add
}

function find() {
   return db('project')
} // Done

function add(body, id) {
    return db('project')
    .where({id})
    .insert(body)
} // Done