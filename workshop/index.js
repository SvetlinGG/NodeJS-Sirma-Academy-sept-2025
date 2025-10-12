const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Hello my first web server</h1>');
});

app.listen(port, () => { console.log(`Server is listen on ${port}`)
})