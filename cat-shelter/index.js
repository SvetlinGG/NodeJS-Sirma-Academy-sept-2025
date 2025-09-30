const http = require('http');
const indexTemplate = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');
const addBreed = require('./views/addBreed.html');
const addCat = require('./views/addCat.html');


const port = 4000;

const cats = [
    {
        id: 1,
        name: "Pretty Citty",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho",
    },
    {
        id: 2,
        name: "Boston",
        breed: "Sphinks",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho",
    },
    {
        id: 3,
        name: "Arizona",
        breed: "Tiger Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho",
    },
    {
        id: 4,
        name: "Bulgarian",
        breed: "Beauty Street",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho",
    }
]

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
        res.write(indexTemplate(cats));
        break;

        case'/cats/add-breed':
        res.write(addBreed);
        break;

        case '/cats/add-cat':
        res.write(addCat);
        break;

        default:
            res.write(`<h1>Page Not Found</h1>`);
            break;
    }
    

    res.end();
});

server.listen(port, () => console.log('Server is listening on http//:localhost4000'));