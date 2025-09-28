const http = require('http');
const indexHtml = require('/views/home/index.html')
const port = 4000;

const server = http.createServer((req, res)=> {
    res.writeHead(200, {
        'content-type': 'text/html',
    });

    if ( req.url === '/'){
        res.write(indexHtml)
    }
    

    res.end();
});

server.listen(port, () => console.log('Server is listening on http//:localhost4000'));