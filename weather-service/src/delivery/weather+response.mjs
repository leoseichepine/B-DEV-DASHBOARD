'use strict'

import Weather from "../model/weather.mjs";

/**
 * Function to build the weather response.
 *
 * @param body The body content of the weather api's response.
 * @returns {Weather} Our weather model.
 */
export default function weatherResponse(body) {
    body = JSON.parse(body)

    let weather = body.weather[0]
    let coordinate = [body.coord.lon, body.coord.lat]
    let state = weather.main
    let description = weather.description
    let iconURL = `http://openweathermap.org/img/w/${weather.icon}.png`
    let temperature = body.main.temp
    let feelsLike = body.main.feelsLike
    let temperatureMax = body.main.temp_max
    let temperatureMin = body.main.temp_min
    let humidity = body.main.humidity
    let sunrise = body.sys.sunrise
    let sunset = body.sys.sunset
    let place = body.name
    let countryCode = body.sys.country
    let wind = body.wind.speed
    let date = body.dt

    return new Weather(
        coordinate,
        state,
        description,
        iconURL,
        temperature,
        feelsLike,
        temperatureMax,
        temperatureMin,
        humidity,
        sunrise,
        sunset,
        place,
        countryCode,
        wind,
        date
    )
}