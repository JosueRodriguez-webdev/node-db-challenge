const express = require('express')
const plug = require('../../api-to-data-helpers/project-helper')

const project = express.Router()

project.use(express.json())

project.get('/', (req, res) => {
    plug.find()
    .then(response => {
        res.status(200).json(response)
    })
}) // Done

project.post('/', (req, res) => {
    plug.add(req.body, req.params)
    .then(response => {
        res.status(200).json(response)
    })
}) // Done

module.exports = project