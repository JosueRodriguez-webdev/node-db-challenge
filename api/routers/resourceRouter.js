const express = require('express')

const plug = require('../../api-to-data-helpers/resource-helper.js')

const resource = express.Router()

resource.use(express.json())

resource.get('/', (req, res) => {
    plug.find()
    .then(response => {
        res.status(200).json(response)
    })
}) // Done

resource.post('/', (req, res) => {
    plug.add(req.body, req.params)
    .then(response => {
        res.status(200).json(response)
    })
}) // Done

module.exports = resource