'use strict'

import Quote from "../model/quote.mjs";

/**
 * Function to build the quote response.
 *
 * Display information about a share.
 *
 * @param data The data of the exchange api's response.
 * @returns Quote Our quote model.
 */
export default function quoteResponse(data) {
    let quote = data["Global Quote"]

    let symbol = quote["01. symbol"]
    let open = quote['02. open']
    let high = quote['03. high']
    let low = quote['04. low']
    let price = quote['05. price']
    let volume = quote['06. volume']
    let latest_trading_day = quote['07. latest trading day']
    let previous_close = quote['08. previous close']
    let change = quote['09. change']
    let change_percent = quote['10. change percent']

    return new Quote(
        symbol,
        open,
        high,
        low,
        price,
        volume,
        latest_trading_day,
        previous_close,
        change,
        change_percent,
    )
}