const http = require('http');
const indexHtml = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');
const addBreed = require('./views/addBreed.html');
const addCat = require('./views/addCat.html');


const port = 4000;

const server = http.createServer((req, res)=> {

    if ( req.url === '/styles/site.css'){
        res.writeHead(200, {
            'content-type': 'text/css',
        });
        res.write(siteCss);
        return res.end();
    }   

    if ( req.url === '/'){
        res.writeHead(200, {
            'content-type': 'text/html',
        });
        res.write(indexHtml);
    }else if(req.url === '/cats/add-breed'){
        res.write(addBreed);

    }else if ( req.url === '/cats/add-cat'){
        res.write(addCat);
    }
    

    res.end();
});

server.listen(port, () => console.log('Server is listening on http//:localhost4000'));