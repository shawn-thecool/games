const PORT = process.env.PORT || 9000
const PING_TIMEOUT = 1000

const app = require('express')()
const cors = require('cors')
const server = require('http').createServer(app)
const io = require('socket.io')(server, { pingTimeout: PING_TIMEOUT })
const { battleSocket } = require('./socket')

app.use(cors())
battleSocket(io)

app.get('/', function(req, res) {
  res.sendFile('Hellow game Server')
})



// app.use(cors())
// app.use('/static', express.static(paths.public))
// app.use('/api/v1/chat', (req, res) => res.sendFile(paths.data))
// app.get('*', (req, res) => res.sendFile(paths.index))

server.listen(PORT, () => console.log(`server listening on port ${PORT}`))
