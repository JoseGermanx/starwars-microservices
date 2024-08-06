const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const { ClientErrors } = require('./utils/errors');

const server = express();

server.use(morgan('dev'));
server.use(express.json());

function verifyGateway(req, res, next) {
    const originHeader = req.headers['x-gateway-origin'];
    if (originHeader !== 'gateway') {
      return res.status(403).send('Access denied');
    }
    next();
  }
  
server.use(verifyGateway);
server.use('/characters', router);
server.use('*', (req, res) => {
    throw ClientErrors.badRequest('Route not found 404')
})

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message || 'Internal Server Error'
    })
})






module.exports = server;