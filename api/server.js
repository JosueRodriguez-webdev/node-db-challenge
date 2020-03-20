const express = require('express')
const helmet = require('helmet')
const CORS = require('cors')

// imported routes
const project = require('./routers/projectRouter.js')
const resource = require('./routers/resourceRouter.js')
const task = require('./routers/taskRouter')


const server = express()

server.use(helmet())
server.use(CORS())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('<p>Hello World</p>')
})

server.use('/api/project', project)

server.use('/api/resource', resource)

server.use('/api/task', task)

module.exports = server
