define({ "api": [
  {
    "type": "get",
    "url": "/exchange/currency/:pair",
    "title": "Get information about the currency pair.",
    "name": "GetCurrencyPair",
    "group": "Exchange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pair",
            "description": "<p>The currency pair.</p>"
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
            "description": "<p>The list of currency pairs that match the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.from_currency_code",
            "description": "<p>The currency code of the first currency.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.from_currency_name",
            "description": "<p>The currency name of the first currency.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.to_currency_code",
            "description": "<p>The currency code of the second currency.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.to_currency_name",
            "description": "<p>The currency name of the second currency.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.exchange_rate",
            "description": "<p>The exchange rate of the currency pair.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.last_refreshed",
            "description": "<p>Last time the information was updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.time_zone",
            "description": "<p>The time zone of the refresh date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.bid_price",
            "description": "<p>The bid price of the currency pair.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.ask_price",
            "description": "<p>The ask price of the currency pair.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/exchange.mjs",
    "groupTitle": "Exchange"
  },
  {
    "type": "get",
    "url": "/exchange/performance/:rank",
    "title": "Get the performance of different sectors.",
    "name": "GetPerformance",
    "group": "Exchange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rank",
            "description": "<p>The rank of the performance.</p> <ul> <li>a: Real-Time Performance</li> <li>b: 1 Day Performance</li> <li>c: 5 Day Performance</li> <li>d: 1 Month Performance</li> <li>e: 3 Month Performance</li> <li>f: Year-to-Date (YTD) Performance</li> <li>g: 1 Year Performance</li> <li>h: 3 Year Performance</li> <li>i: 5 Year Performance</li> <li>j: 10 Year Performance</li> </ul>"
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
            "description": "<p>The map which contains the performance of the sectors.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.rank",
            "description": "<p>The rank of the performance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.sectors",
            "description": "<p>The list of available sectors.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.description",
            "description": "<p>The description of the performance.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/exchange.mjs",
    "groupTitle": "Exchange"
  },
  {
    "type": "get",
    "url": "/exchange/share/:share",
    "title": "Get information about a quote.",
    "name": "GetShare",
    "group": "Exchange",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share",
            "description": "<p>The share.</p>"
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
            "description": "<p>The list of shares that match the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.symbol",
            "description": "<p>The symbol of the share.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.open",
            "description": "<p>The open price of the share.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.high",
            "description": "<p>The highest share price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.low",
            "description": "<p>The lowest share price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.price",
            "description": "<p>The price of the share.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.volume",
            "description": "<p>The volume of the share.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.latest_trading_day",
            "description": "<p>The latest trading view.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.previous_close",
            "description": "<p>The share price during the previous close.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.change",
            "description": "<p>The evolution of the share price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "items.change_percent",
            "description": "<p>The evolution of the share price in percent.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/exchange.mjs",
    "groupTitle": "Exchange"
  }
] });
