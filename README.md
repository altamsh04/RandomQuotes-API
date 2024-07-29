# Random Quotes API

Welcome to the Random Quotes API! This API provides access to a collection of motivational quotes that you can use in your applications. It's a free and open API that you can integrate into your projects to inspire and motivate your users.

<div align='center'>
  <br>
  <img src="https://github.com/user-attachments/assets/8846d2f4-7c04-40a7-8ddd-b879e768881b" alt="RandomQuotesAPI">
  <br>
</div>

## Technologies Used

- **Language**: JavaScript
- **Backend**: Express.js
- **Hosting**: Vercel

## Getting Started

To get started with the API, you can make requests to the following endpoints to get quotes:

### Get a Random Quote

```
GET https://random-quotes-freeapi.vercel.app/api/random
```

This will return a JSON response with a random quote and its author.

### Get All Quotes

```
GET https://random-quotes-freeapi.vercel.app/api/quotes
```

This will return a JSON response with all quotes in the collection.

### Get Quote by ID

```
GET https://random-quotes-freeapi.vercel.app/api/quotes/{id}
```

Replace `{id}` with the specific ID of the quote you want to fetch. This will return a JSON response with the quote and its author.

## Example Responses

### Random Quote

```json
{
    "id" : 1, 
    "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer"
}
```

### All Quotes

```json
[
    {
        "id": 1,
        "quote": "The best way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "id": 2,
        "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        "author": "Winston Churchill"
    },
    {
        "id": 3,
        "quote": "Don’t let yesterday take up too much of today.",
        "author": "Will Rogers"
    }
]
```

### Quote by ID

```json
{
    "id": 1,
    "quote": "The best way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
}
```

## Rate Limiting
- **Window Duration**: 15 minutes
- **Maximum Requests**: 100 requests per IP within the window duration
- **Response on Limit Exceed**: A 429 Too Many Requests status code with the following JSON response

```json
{
  "message": "Too many requests from this IP, please try again after 15 minutes"
}
```

## Usage

You can use the API to display quotes on your website or application to motivate your users. Here are some examples of how you can use the API with JavaScript:

### Get Random Quote

```javascript
fetch('https://random-quotes-freeapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
        console.log("- " + data.author);
    });
```

### Get All Quotes

```javascript
fetch('https://random-quotes-freeapi.vercel.app/api/quotes')
    .then(response => response.json())
    .then(data => {
        data.forEach(quote => {
            console.log(quote.quote);
            console.log("- " + quote.author);
        });
    });
```

### Get Quote by ID

```javascript
const quoteId = 1; // Example ID
fetch(`https://random-quotes-freeapi.vercel.app/api/quotes/${quoteId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
        console.log("- " + data.author);
    });
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
