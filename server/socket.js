const battleSocket = io => {
  io.on('connection', function(socket) {
    socket.on('test', function(data) {
      console.log('Message from %s: %s', data.name, data.msg)
      const msg = {
        from: {
          name: data.name
        },
        msg: data.msg
      }
      socket.broadcast.emit('test', msg)
    })

    socket.on('disconnect', function() {
      console.log('user disconnected: ' + socket.name)
    })
  })
}

module.exports = { battleSocket }
