'use strict'

import Screening from "../model/screening.mjs";

/**
 * Function to build the screening response.
 *
 * Display of the list of the day’s screenings for cinema C.
 *
 * @param body The body content of the cinema api's response.
 * @returns [Screening] A list of our screening model.
 */
export default function screeningResponse(body) {
    body = JSON.parse(body)

    // TODO build [Post] with the body (response of the Cinema api)

    return screenings
}