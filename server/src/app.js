const { SERVER_PORT, PING_TIMEOUT } = require('./constants')
const app = require('express')()
const server = require('http').createServer(app.use(require('cors')()))
const io = require('socket.io')(server, { pingTimeout: PING_TIMEOUT })
const { battleSocket } = require('./socket')

battleSocket(io)
// 싱크 맞추기 , server timesteamp 기준 
// responese timeout event 등록

server.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))
