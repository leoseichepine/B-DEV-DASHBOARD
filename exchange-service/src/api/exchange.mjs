'use strict'

import {apiSettings} from '../config/config.mjs';
import alphavantage from "alphavantage"
import currencyExchange from "../delivery/currency_exchange+response.mjs";
import quoteResponse from "../delivery/quote+response.mjs"
import performanceResponse from "../delivery/performance+response.mjs";

/**
 * Init Alpha Vantage with your api key.
 *
 * @param {String} key
 *   Your Alpha Vantage api key.
 */
const alpha = alphavantage({ key: apiSettings.key });

export default (app, options) => {

    /**
     * @api {get} /exchange/currency/:pair Get information about the currency pair.
     * @apiName GetCurrencyPair
     * @apiGroup Exchange
     *
     * @apiParam {String} pair The currency pair.
     *
     * @apiSuccess {Object[]} items The list of currency pairs that match the query.
     * @apiSuccess {String} items.from_currency_code The currency code of the first currency.
     * @apiSuccess {String} items.from_currency_name The currency name of the first currency.
     * @apiSuccess {String} items.to_currency_code The currency code of the second currency.
     * @apiSuccess {String} items.to_currency_name The currency name of the second currency.
     * @apiSuccess {String} items.exchange_rate The exchange rate of the currency pair.
     * @apiSuccess {String} items.last_refreshed Last time the information was updated.
     * @apiSuccess {String} items.time_zone The time zone of the refresh date.
     * @apiSuccess {String} items.bid_price The bid price of the currency pair.
     * @apiSuccess {String} items.ask_price The ask price of the currency pair.
     */
    app.get(`${apiSettings.path_prefix}currency/:pair`, (req, res, next) => {
        let currencies = req.params.pair.split(':')

        if (currencies.length !== 2) {
            res.sendStatus(400);
        }

        alpha.forex.rate(currencies[0], currencies[1]).then((data) => {
            let items = {
                items: [currencyExchange(data)],
            }
            res.json(items);
        }).catch(function(e){
            next(e)
        });
    });

    /**
     * @api {get} /exchange/share/:share Get information about a quote.
     * @apiName GetShare
     * @apiGroup Exchange
     *
     * @apiParam {String} share The share.
     *
     * @apiSuccess {Object[]} items The list of shares that match the query.
     * @apiSuccess {String} items.symbol The symbol of the share.
     * @apiSuccess {String} items.open The open price of the share.
     * @apiSuccess {String} items.high The highest share price.
     * @apiSuccess {String} items.low The lowest share price.
     * @apiSuccess {String} items.price The price of the share.
     * @apiSuccess {String} items.volume The volume of the share.
     * @apiSuccess {String} items.latest_trading_day The latest trading view.
     * @apiSuccess {String} items.previous_close The share price during the previous close.
     * @apiSuccess {String} items.change The evolution of the share price.
     * @apiSuccess {String} items.change_percent The evolution of the share price in percent.
     */
    app.get(`${apiSettings.path_prefix}share/:share`, (req, res, next) => {
        let share = req.params.share;

        alpha.data.quote(share).then((data) => {
            if (Object.keys(data).length === 0) {
                res.sendStatus(400);
            }
            let items = {
                items: [quoteResponse(data)],
            }
            res.json(items);
        }).catch(function(e){
            next(e)
        });
    });

    /**
     * @api {get} /exchange/performance/:rank Get the performance of different sectors.
     * @apiName GetPerformance
     * @apiGroup Exchange
     *
     * @apiParam {String} rank The rank of the performance.
     * - a: Real-Time Performance
     * - b: 1 Day Performance
     * - c: 5 Day Performance
     * - d: 1 Month Performance
     * - e: 3 Month Performance
     * - f: Year-to-Date (YTD) Performance
     * - g: 1 Year Performance
     * - h: 3 Year Performance
     * - i: 5 Year Performance
     * - j: 10 Year Performance
     *
     * @apiSuccess {Object[]} items The map which contains the performance of the sectors.
     * @apiSuccess {String} items.rank The rank of the performance.
     * @apiSuccess {String} items.sectors The list of available sectors.
     * @apiSuccess {String} items.description The description of the performance.
     */
    app.get(`${apiSettings.path_prefix}performance/:rank?`, (req, res, next) => {
        let rank = req.params.rank;

        alpha.performance.sector().then((data) => {
            if (Object.keys(data).length === 0) {
                res.sendStatus(400);
            }
            let str = rank + ""
            let items = {
                items: performanceResponse(str.toUpperCase(), data),
            }
            res.json(items);
        }).catch(function(e){
            next(e)
        });
    });
};