var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const userServiceProxy = httpProxy('http://localhost:3001/');
const productsServiceProxy = httpProxy('http://localhost:3002/');

// Proxy request
// app.get('/users', (req, res, next) => {
//   console.log('users')
//   userServiceProxy(req, res, next);
// })

// app.get('/products', (req, res, next) => {
//   console.log('products')
//   productsServiceProxy(req, res, next);
// })

app.use('/users', userServiceProxy)
app.use('/products', productsServiceProxy)

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);
