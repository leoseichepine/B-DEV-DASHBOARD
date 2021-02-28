'use strict'

/**
 * A model that represents a quote.
 */
export default class Quote {
    constructor(
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
    ) {
        this.symbol = symbol
        this.open = open
        this.high = high
        this.low = low
        this.price = price
        this.volume = volume
        this.latest_trading_day = latest_trading_day
        this.previous_close = previous_close
        this.change = change
        this.change_percent = change_percent
    }
}