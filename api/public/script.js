function copyToClipboard() {
    const quoteText = document.getElementById('quoteLink').innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote API link copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy quote API link:', err);
    });
}
document.addEventListener('DOMContentLoaded', function() {
const text = "Random Quotes API!";
const delay = 100;
const element = document.getElementById('typing-heading');

function typeWriter(text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => {
            typeWriter(text, i);
        }, delay);
    } else {
        setTimeout(() => {
            element.innerHTML = '';
            typeWriter(text, 0);
        }, 3000);
    }
}
typeWriter(text, 0);

function get_random_quote() {
    fetch('https://random-quotes-freeapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote").textContent = data.quote; 
        document.getElementById("quoteAuthor").textContent = "- " + data.author;
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
    });
}

window.onload = get_random_quote;
});
