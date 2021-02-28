'use strict'

import CurrencyExchange from "../model/currency_exchange.mjs";

/**
 * Function to build the currency exchange response.
 *
 * Display information about the currency exchange like the exchange rate, bid price, ask price, etc.
 *
 * @param data The data of the exchange api's response.
 * @returns CurrencyExchange Our currency exchange model.
 */
export default function currencyExchange(data) {
    let rate = data["Realtime Currency Exchange Rate"]

    let from_currency_code = rate["1. From_Currency Code"]
    let from_currency_name = rate["2. From_Currency Name"]
    let to_currency_code = rate["3. To_Currency Code"]
    let to_currency_name = rate["4. To_Currency Name"]
    let exchange_rate = rate["5. Exchange Rate"]
    let last_refreshed = rate["6. Last Refreshed"]
    let time_zone = rate["7. Time Zone"]
    let bid_price = rate["8. Bid Price"]
    let ask_price = rate["9. Ask Price"]

    return new CurrencyExchange(
        from_currency_code,
        from_currency_name,
        to_currency_code,
        to_currency_name,
        exchange_rate,
        last_refreshed,
        time_zone,
        bid_price,
        ask_price,
    )
}