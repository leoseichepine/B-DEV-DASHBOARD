'use strict'

/**
 * A model that represents a currency exchange.
 */
export default class CurrencyExchange {
    constructor(
        from_currency_code,
        from_currency_name,
        to_currency_code,
        to_currency_name,
        exchange_rate,
        last_refreshed,
        time_zone,
        bid_price,
        ask_price,
    ) {
        this.from_currency_code = from_currency_code
        this.from_currency_name = from_currency_name
        this.to_currency_code = to_currency_code
        this.to_currency_name = to_currency_name
        this.exchange_rate = exchange_rate
        this.last_refreshed = last_refreshed
        this.time_zone = time_zone
        this.bid_price = bid_price
        this.ask_price = ask_price
    }
}