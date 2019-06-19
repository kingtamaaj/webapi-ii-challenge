const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h2> Posts API </h2>
    <p> Welcome to the Lambda Posts API </p>
    `);
});

module.exports = server;