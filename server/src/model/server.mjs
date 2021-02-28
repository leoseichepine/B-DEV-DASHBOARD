'use strict'

/**
 * The model of the server.
 */
export default class Server {
    constructor(
        current_time,
        services
    ) {
        this.current_time = current_time
        this.services = services
    }
}