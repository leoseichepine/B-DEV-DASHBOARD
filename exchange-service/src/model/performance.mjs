'use strict'

/**
 * A model that represents the performance of the sectors.
 */
export default class Performance {
    constructor(
        rank,
        sectors,
        description
    ) {
        this.rank = rank
        this.sectors = sectors
        this.description = description
    }
}