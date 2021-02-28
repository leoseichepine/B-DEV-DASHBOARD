'use strict'

import Weather from "../model/weather.mjs";

/**
 * Function to build the forecast weather response.
 *
 * First weather forecast after three hours and then every hour for 24 hours.
 *
 * @param body The body content of the weather api's response.
 * @returns [Weather] A list of our weather model.
 */
export default function forecastWeatherResponse(body) {
    body = JSON.parse(body)

    const weathers = [];

    for (const i in body.list) {
        if (body.list.hasOwnProperty(i)) {
            let coordinate = [body.city.coord.lon, body.city.coord.lat]
            let state = body.list[i].weather[0].main
            let description = body.list[i].weather[0].description
            let iconURL = `http://openweathermap.org/img/w/${body.list[i].weather[0].icon}.png`
            let temperature = body.list[i].main.temp
            let feelsLike = body.list[i].main.feelsLike
            let temperatureMax = body.list[i].main.temp_max
            let temperatureMin = body.list[i].main.temp_min
            let humidity = body.list[i].main.humidity
            let sunrise = body.city.sunrise
            let sunset = body.city.sunset
            let place = body.city.name
            let countryCode = body.city.country
            let wind = body.list[i].wind.speed
            let date = body.list[i].dt

            weathers.push(
                new Weather(
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
            )
        }
    }

    return weathers
}