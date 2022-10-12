const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to javascript!")
});

app.listen(3000, () => {
    console.log("Hola Mundo version 3!");
});
