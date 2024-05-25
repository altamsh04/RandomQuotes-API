# Daily Quote Dose API

Welcome to the Daily Quote Dose API! This API provides access to a collection of motivational quotes that you can use in your applications. It's a free and open API that you can integrate into your projects to inspire and motivate your users.
<div align='center'>
  <br>
  <img src="https://github.com/altamsh04/DailyQuotesDose-API/assets/84860267/8789433f-a489-4801-9e7f-a7b69016442d" alt="DailyQuotesDose">
  <br>
</div>
## Getting Started

To get started with the API, you can make a request to the following endpoint to get a random quote:

```
GET https://dailyquotesdose.onrender.com/api/random
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

## Usage

You can use the API to display a random quote on your website or application to motivate your users. Here's an example of how you can use the API with JavaScript:

```javascript
fetch('https://dailyquotesdose.onrender.com/api/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
        console.log("- " + data.author);
    });
```
