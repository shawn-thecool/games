// const system = 'localhost:9000/'
const battleSocket = io => {
  io.on('connection', socket => {
    //on
    console.log('/battle : a user connected')
    socket.on('test', data => {
      console.log('/battle : test', data)
      socket.broadcast.emit('battle', 'wowo')
      console.log('/battle : test', 'after')
    })
    socket.on('disconnect', () => {
      console.log('/battle : a user disconnected')
    })
    // emit
    socket.broadcast.emit('join', { msg: 'join-member' })
  })
}

// listener(socket)

// emitter(socket)

module.exports = { battleSocket }
