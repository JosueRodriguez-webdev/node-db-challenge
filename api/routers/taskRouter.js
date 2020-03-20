const express = require('express')
const plug = require('../../api-to-data-helpers/task-helper.js')

const task = express.Router()

task.use(express.json())

task.get('/', (req, res) => {
    plug.find()
    .then(response => {
        res.status(200).json(response)
    })
}) // Done

task.post('/', (req, res) => {
    plug.add(req.body, req.params)
    .then(response => {
        res.status(200).json(response)
    })
}) // Done

module.exports = task