const express = require('express');


const app = express();
const port = 5000;

app.get((req, res) => {
    res.send("Hello my Web Server");

    res.end()
});

app.listen(port, () => console.log('Server is listening on http//:localhost5000'));