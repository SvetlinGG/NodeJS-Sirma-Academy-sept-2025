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

    switch (req.url){
        case '/':
        res.write(indexHtml);
        break;

        case'/cats/add-breed':
        res.write(addBreed);
        break;

        case '/cats/add-cat':
        res.write(addCat);
        break;
    }
    

    res.end();
});

server.listen(port, () => console.log('Server is listening on http//:localhost4000'));