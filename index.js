const express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const PORT = process.env.PORT || 3000

io.on('connect', function (socket) {
  io.emit('ranking', {cachorro: 'teste'})
})

app.get('/', function (req, res) {
  res.json({api: 'Hello Human, ready to play? API works!'})
})

app.get('/cachorro', (req, res) => {
  res.sendFile(`${__dirname}/frontend/index.html`)
})

http.listen(PORT, function () {
  console.log('API READY')
})
