'use strict'

/**
 * The model of the widget.
 */
export default class Widget {
    constructor(
        name,
        description,
        params
    ) {
        this.name = name
        this.description = description
        this.params = params
    }
}