const express = require('express')
const helmet = require('helmet')
const CORS = require('cors')


const server = express()

server.use(helmet())
server.use(CORS())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('<p>Hello World</p>')
})

module.exports = server
