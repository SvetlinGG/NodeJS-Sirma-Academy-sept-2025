const express = require('express');


const app = express();
const port = 5000;

app.get((req, res) => {
    res.send(`<h1>Hello my Web Server</h1>`);

    res.end()
});

app.listen(port, () => console.log('Server is listening on http//:localhost5000'));