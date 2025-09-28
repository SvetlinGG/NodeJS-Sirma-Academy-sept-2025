const http = require('http');
const port = 4000;

const server = http.createServer((req, res)=> {
    res.write('<h1>My new Web Server</h1>');

    res.end();
});

server.listen(port, () => console.log('Server is listening on http//:localhost4000'));