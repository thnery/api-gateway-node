var http = require('http');
const express = require('express')
const app = express()

// Proxy request
app.get('/', (req, res, next) => {
  res.send('hello products')
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = http.createServer(app);
server.listen(3002);

