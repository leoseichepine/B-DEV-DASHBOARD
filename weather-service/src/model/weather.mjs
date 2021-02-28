'use strict'

/**
 * The model of the service.
 */
export default class Weather {
    constructor(
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
    ) {
        this.coordinate = coordinate
        this.state = state
        this.description = description
        this.iconURL = iconURL
        this.temperature = temperature
        this.feelsLike = feelsLike
        this.temperatureMax = temperatureMax
        this.temperatureMin = temperatureMin
        this.humidity = humidity
        this.sunrise = sunrise
        this.sunset = sunset
        this.place = place
        this.countryCode = countryCode
        this.wind = wind
        this.date = date
    }
}