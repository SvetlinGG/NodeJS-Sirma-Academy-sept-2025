const http = require('http');
const indexHtml = require('./views/home/index.html')
const port = 4000;

const server = http.createServer((req, res)=> {
    

    if ( req.url === '/'){
        res.writeHead(200, {
            'content-type': 'text/html',
        });
        res.write(indexHtml);
    }else if ( req.url === '/styles/site.css'){

    }
    

    res.end();
});

server.listen(port, () => console.log('Server is listening on http//:localhost4000'));