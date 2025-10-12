const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Hello my first web server</h1>');
});
app.get('/about', (req, res, next) => {  // here is Middleware

    console.log('Middleware');
    next();
}, (req, res) => {
    res.send('This is about page')
});

app.listen(port, () => { console.log(`Server is listen on ${port}`)})
