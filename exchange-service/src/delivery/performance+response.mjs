'use strict'

import Performance from "../model/performance.mjs";

/**
 * Function to build the quote response.
 *
 * Display sector performance information.
 *
 * @param rank The rank of the performance.
 * [ 'Rank A', ' Real-Time Performance' ]
 * [ 'Rank B', ' 1 Day Performance' ]
 * [ 'Rank C', ' 5 Day Performance' ]
 * [ 'Rank D', ' 1 Month Performance' ]
 * [ 'Rank E', ' 3 Month Performance' ]
 * [ 'Rank F', ' Year-to-Date (YTD) Performance' ]
 * [ 'Rank G', ' 1 Year Performance' ]
 * [ 'Rank H', ' 3 Year Performance' ]
 * [ 'Rank I', ' 5 Year Performance' ]
 * [ 'Rank J', ' 10 Year Performance' ]
 *
 * @param data The data of the exchange api's response.
 * @returns Performance Our performance model.
 */
export default function performanceResponse(rank, data) {
    const performances = []

    Object.keys(data).forEach(function(key) {
        if (key !== 'Meta Data') {
            let letter = key.split(':')[0].split(' ')[1]
            let description = key.split(':')[1].trim()

            if (rank === letter) {
                performances.push(
                    new Performance(
                        rank,
                        data[key],
                        description
                    )
                )
            }
            if (rank === "UNDEFINED") {
                performances.push(
                    new Performance(
                        key,
                        data[key],
                        description
                    )
                )
            }
        }
    });

    return performances
}