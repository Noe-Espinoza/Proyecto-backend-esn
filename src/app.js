const server= require ('./server/server')
const express = require('express');
const app = express();
require('dotenv').config();
require('./db/connection');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Servidor funcionando en http://localhost:8080')
});


