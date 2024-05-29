const express = require('express');
const app = express();
const path = require('path');
const quotes = require('./quotes');
const port = 8080;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'RandomQuotesAPI.html'));
});

app.get("/api/random", (req, res) => {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    res.status(200).json(randomQuote);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
