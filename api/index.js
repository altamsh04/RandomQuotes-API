const app = require('express')();
const path = require('path');

const port = 8080;
const quotes = [
    { id: 1, quote: "The only way to do great work is to love what you do." },
    { id: 2, quote: "Life is what happens when you're busy making other plans." },
    { id: 3, quote: "Get busy living or get busy dying." },
    { id: 4, quote: "You only live once, but if you do it right, once is enough." },
    { id: 5, quote: "The best way to predict the future is to invent it." },
    { id: 6, quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." },
    { id: 7, quote: "Success is not how high you have climbed, but how you make a positive difference to the world." },
    { id: 8, quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
    { id: 9, quote: "Believe you can and you're halfway there." },
    { id: 10, quote: "Act as if what you do makes a difference. It does." }
];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get("/fetchQuotes", (req, res) => {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    res.status(200).send([randomQuote]);
});

app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);
