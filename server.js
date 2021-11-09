'use strict'
require('dotenv').config();

const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const blog = require('./api/routes/blog.routes');

const PORT = process.env.PORT || 4000;

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());
server.use(helmet());
server.use('/', blog)

server.listen(PORT, ()=>{
    console.log(`listening on PORT=${PORT}`);
})