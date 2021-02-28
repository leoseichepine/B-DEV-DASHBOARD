'use strict'

import About from "../model/about.mjs"
import Customer from "../model/customer.mjs"
import Server from "../model/server.mjs"
import Service from "../model/service.mjs"
import Widget from "../model/widget.mjs"
import Parameter from "../model/parameter.mjs"
import {networkInterfaces} from "os"

// https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
function getNetworkInfos() {
    const nets = networkInterfaces();
    const results = Object.create(null); // or just '{}', an empty object

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }

                results[name].push(net.address);
            }
        }
    }
    return results
}

function getCustomer() {
    let results = getNetworkInfos()
    let host = results["eth0"][0];
    return new Customer(host)
}

function getServer() {
    let current_time = Date.now() // Unix timestamp in milliseconds
    let services = [
        getWeatherService(),
        getSpotifyService(),
        getCatService(),
        getExchangeService()
    ]
    return new Server(current_time, services)
}

function getWeatherService() {
    let name = "weather"
    let widgets = []

    widgets.push(new Widget(
        "location_temperature",
        "Display temperature for a place.",
        [
            new Parameter(
                "place",
                "string"
            )]
    ))
    widgets.push(new Widget(
        "location_forecast_temperature",
        "Display forecast temperatures for a place.",
        [
            new Parameter(
                "place",
                "string"
            )]
    ))
    widgets.push(new Widget(
        "location_sunrise_sunset",
        "Display the time of sunrise and sunset for a place.",
        [
            new Parameter(
                "place",
                "string"
            )]
    ))

    return new Service(name, widgets)
}

function getCatService() {
    let name = "cat"
    let widgets = []

    widgets.push(new Widget(
        "image_cat_breed",
        "Display the image of a cat according to its breed.",
        [
            new Parameter(
                "breed",
                "string"
            )]
    ))
    widgets.push(new Widget(
        "image_cat_category",
        "Display the image of a cat according to its category.",
        [
            new Parameter(
                "category",
                "string"
            )]
    ))
    widgets.push(new Widget(
        "info_cat_breed",
        "Display information about the breed of a cat.",
        [
            new Parameter(
                "breed",
                "string"
            )]
    ))

    return new Service(name, widgets)
}

function getExchangeService() {
    let name = "exchange"
    let widgets = []

    widgets.push(new Widget(
        "exchange_rate",
        "Display the exchange rate of a currency pair",
        [
            new Parameter(
                "pair",
                "string"
            )]
    ))
    widgets.push(new Widget(
        "share_price_evolution",
        "Display the evolution of a share price.",
        [
            new Parameter(
                "share",
                "string"
            )]
    ))
    widgets.push(new Widget(
        "sector_performance",
        "Display the performance of a sector.",
        [
            new Parameter(
                "rank",
                "string"
            )]
    ))

    return new Service(name, widgets)
}

function getSpotifyService() {
    let name = "spotify"
    let widgets = []

    widgets.push(new Widget(
        "user_playlists",
        "Display the user's playlists.",
        []
    ))
    widgets.push(new Widget(
        "user_saved_albums",
        "Display the user's saved albums.",
        []
    ))

    return new Service(name, widgets)
}

/**
 * Function to build the about response.
 *
 * Give some information about the Dashboard.
 *
 * @returns About The completed about model.
 */
export default function aboutResponse() {
    return new About(
        getCustomer(),
        getServer()
    )
}