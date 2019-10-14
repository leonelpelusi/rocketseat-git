const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    return res.json({
        message: 'Hello World 2'
    })
});

app.listen(3333);