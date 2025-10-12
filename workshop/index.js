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

app.use('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    // Check if user exists in db/session

    let userExist = false;
    if ( !userExist) { res.redirect('/login')}
    else {next()}
});
app.get('/user/:userId', (req, res) => {
    res.send('User home page');
});
app.listen(port, () => { console.log(`Server is listen on ${port}`)})
