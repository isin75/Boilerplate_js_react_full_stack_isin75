const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const port = 8090

server.use(express.json({limit: '100mb'}))

server.get('/', (req, res) => {
  res.send('Hello ewdasdw')
})

server.get('/jojo', (req, res) => {
  res.send('Gay')
})

server.get('/*', (req, res) => {
  res.status('404')
  res.end()
})

server.post("/", (req, res) => res.send(req.body));

server.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})