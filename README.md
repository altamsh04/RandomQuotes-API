# Random Quotes API

Welcome to the Random Quotes API! This API provides access to a collection of motivational quotes that you can use in your applications. It's a free and open API that you can integrate into your projects to inspire and motivate your users.
<div align='center'>
  <br>
  <img src="https://github.com/altamsh04/RandomQuotes-API/assets/84860267/3758a1d8-29b2-43ab-9bff-626fbdacfb3b" alt="RandomQuotesAPI">
  <br>
</div>

## Technologies Used

- **Language**: JavaScript
- **Backend**: Express.js
- **Hosting**: Vercel

## Getting Started

To get started with the API, you can make a request to the following endpoint to get a random quote:

```
GET https://random-quotes-freeapi.vercel.app/api/random
```

This will return a JSON response with a random quote and its author.

## Example Response

```json
{
    "id" : 1, 
    "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer"
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

You can use the API to display a random quote on your website or application to motivate your users. Here's an example of how you can use the API with JavaScript:

```javascript
fetch('https://random-quotes-freeapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
        console.log("- " + data.author);
    });
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
