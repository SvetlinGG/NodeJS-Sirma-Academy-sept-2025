const http = require('http');
const express = require('express');


const app = express();
const port = 5000;

const server = http.createServer((req, res) => {
    console.log('Incoming HTTP Server');
    
})

app.get((req, res) => {
    res.write(`<h1>Hello my Web Server</h1>`);

    res.end();
});

app.listen(port, () => console.log('Server is listening on http//:localhost5000'));