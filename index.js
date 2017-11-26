const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({api: 'Hello Human, ready to play? API works!'})
})

app.listen(3000, function () {
  console.log('API READY')
})
