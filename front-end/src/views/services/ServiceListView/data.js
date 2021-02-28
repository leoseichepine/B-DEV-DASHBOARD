export default [
  {
          "name": "weather",
          "widgets": [
            {
              "name": "city_temperature",
              "description": "Display temperature for a city",
              "params": [
                {
                  "name": "city",
                  "type": "string"
                }
              ]
            },
            {
              "name": "city_forecast_temperature",
              "description": "Display forecast temperatures for a city",
              "params": [
                {
                  "name": "city",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "name": "cinema",
          "widgets": [
            {
              "name": "day_screenings",
              "description": "Display the day’s screenings for a cinema",
              "params": [
                {
                  "name": "cinema",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "name": "reddit",
          "widgets": [
            {
              "name": "subreddit_posts",
              "description": "Display the posts of a subreddit",
              "params": [
                {
                  "name": "subreddit",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "name": "exchange",
          "widgets": [
            {
              "name": "exchange_rate",
              "description": "Display the exchange rate of a currency pair",
              "params": [
                {
                  "name": "pair",
                  "type": "string"
                }
              ]
            },
            {
              "name": "share_price_evolution",
              "description": "Display the evolution of a share price",
              "params": [
                {
                  "name": "share",
                  "type": "string"
                }
              ]
            }
          ]
        }
];
