define({ "api": [
  {
    "type": "get",
    "url": "/weather/forecast/:place",
    "title": "Get the forecast weather by location.",
    "name": "GetForecastWeather",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>The location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>The list of weather forecast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.coordinate",
            "description": "<p>The coordinate of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.state",
            "description": "<p>The state of the forecast weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.description",
            "description": "<p>The description of the forecast weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.iconURL",
            "description": "<p>The url of the icon that represents the forecast weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.temperature",
            "description": "<p>The forecast temperature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.temperatureMax",
            "description": "<p>The highest temperature of the forecast day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.temperatureMin",
            "description": "<p>The lowest temperature of the forecast day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.humidity",
            "description": "<p>The forecast humidity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.sunrise",
            "description": "<p>The sunrise time of the forecast day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.sunset",
            "description": "<p>The sunset time of the forecast day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.place",
            "description": "<p>The name of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.countryCode",
            "description": "<p>The country code of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.wind",
            "description": "<p>The wind speed of the forecast weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.date",
            "description": "<p>The date of the forecast weather.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/weather.mjs",
    "groupTitle": "Weather"
  },
  {
    "type": "get",
    "url": "/weather/:place",
    "title": "Get the current weather by location.",
    "name": "GetWeather",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>The location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>The map which contains the current weather of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.coordinate",
            "description": "<p>The coordinate of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.state",
            "description": "<p>The state of the current weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.description",
            "description": "<p>The description of the current weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.iconURL",
            "description": "<p>The url of the icon that represents the current weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.temperature",
            "description": "<p>The current temperature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.temperatureMax",
            "description": "<p>The highest temperature of the day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.temperatureMin",
            "description": "<p>The lowest temperature of the day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.humidity",
            "description": "<p>The current humidity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.sunrise",
            "description": "<p>The sunrise time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.sunset",
            "description": "<p>The sunset time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.place",
            "description": "<p>The name of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.countryCode",
            "description": "<p>The country code of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.wind",
            "description": "<p>The wind speed of the current weather.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.date",
            "description": "<p>The date of the current weather (today).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/weather.mjs",
    "groupTitle": "Weather"
  }
] });
