const express = require('express');
const server = express();
const router= require ('../routes/routes')
const datosRouter = require('../routes/apiRouter');

server.use(express.json());

server.get ('/', (_, res) => {
    res.send('Servidor del pet shop funcionando')
}) 

server.use('/api', router);

server.use ('/api/datos', datosRouter);

module.exports= server;