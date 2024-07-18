const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const quotes = require('./quotes');

const app = express();
const port = 8080;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    handler: (req, res) => {
        res.status(429).json({
            message: 'Too many requests from this IP, please try again after 15 minutes'
        });
    }
});

app.use(limiter);

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
