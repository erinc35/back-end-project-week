const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};

module.exports = function (server) {
    server.use(helmet());
    server.use(express.json());
    server.use(cors(corsOptions));
};
