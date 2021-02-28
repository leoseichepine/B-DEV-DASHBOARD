'use strict'

import request from 'request';
import weatherResponse from '../delivery/weather+response.mjs';
import forecastWeatherResponse from '../delivery/forecast+response.mjs';
import {apiSettings, apiSettings as api} from '../config/config.mjs';

export default (app, options) => {

    /**
     * @api {get} /weather/:place Get the current weather by location.
     * @apiName GetWeather
     * @apiGroup Weather
     *
     * @apiParam {String} place The location.
     *
     * @apiSuccess {Object[]} items The map which contains the current weather of the location.
     * @apiSuccess {String} items.coordinate The coordinate of the location.
     * @apiSuccess {String} items.state The state of the current weather.
     * @apiSuccess {String} items.description The description of the current weather.
     * @apiSuccess {String} items.iconURL The url of the icon that represents the current weather.
     * @apiSuccess {String} items.temperature The current temperature.
     * @apiSuccess {String} items.temperatureMax The highest temperature of the day.
     * @apiSuccess {String} items.temperatureMin The lowest temperature of the day.
     * @apiSuccess {String} items.humidity The current humidity.
     * @apiSuccess {String} items.sunrise The sunrise time.
     * @apiSuccess {String} items.sunset The sunset time.
     * @apiSuccess {String} items.place The name of the location.
     * @apiSuccess {String} items.countryCode The country code of the location.
     * @apiSuccess {String} items.wind The wind speed of the current weather.
     * @apiSuccess {String} items.date The date of the current weather (today).
     */
    app.get(`${apiSettings.path_prefix}:place`, (req, res, next) => {
        let place = req.params.place;
        let url = `${api.url}weather?q=${place}&units=metric&APPID=${api.key}`;

        request(url, function (error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                let data = {
                    items: [weatherResponse(body)],
                }
                res.json(data);
            }
        });
    });

    /**
     * @api {get} /weather/forecast/:place Get the forecast weather by location.
     * @apiName GetForecastWeather
     * @apiGroup Weather
     *
     * @apiParam {String} place The location.
     *
     * @apiSuccess {Object[]} items The list of weather forecast.
     * @apiSuccess {String} items.coordinate The coordinate of the location.
     * @apiSuccess {String} items.state The state of the forecast weather.
     * @apiSuccess {String} items.description The description of the forecast weather.
     * @apiSuccess {String} items.iconURL The url of the icon that represents the forecast weather.
     * @apiSuccess {String} items.temperature The forecast temperature.
     * @apiSuccess {String} items.temperatureMax The highest temperature of the forecast day.
     * @apiSuccess {String} items.temperatureMin The lowest temperature of the forecast day.
     * @apiSuccess {String} items.humidity The forecast humidity.
     * @apiSuccess {String} items.sunrise The sunrise time of the forecast day.
     * @apiSuccess {String} items.sunset The sunset time of the forecast day.
     * @apiSuccess {String} items.place The name of the location.
     * @apiSuccess {String} items.countryCode The country code of the location.
     * @apiSuccess {String} items.wind The wind speed of the forecast weather.
     * @apiSuccess {String} items.date The date of the forecast weather.
     */
    app.get(`${apiSettings.path_prefix}forecast/:place`, (req, res, next) => {
        let place = req.params.place;
        let url = `${api.url}forecast?q=${place}&units=metric&APPID=${api.key}`;

        request(url, function (error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                let data = {
                    items: forecastWeatherResponse(body),
                }
                res.json(data);
            }
        });
    });
};