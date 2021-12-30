module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A new user just connected')

    socket.emit('newMessage', {
      from: 'Admin',
      text: 'Welcome to the chat app!',
      createdAt: new Date()
    })

    socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined!',
      createdAt: new Date()
    })

    socket.on('createMessage', (message) => {
      console.log('createMessage', message)
      io.emit('newMessage', {
        from: message.from,
        text: message.text,
        createdAt: new Date()
      })
    })

    socket.on('disconnect', () => {
      console.log('User was disconnected')
    })
  })
}
