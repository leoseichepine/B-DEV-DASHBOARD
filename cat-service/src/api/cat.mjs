'use strict'

import {apiSettings, apiSettings as api} from '../config/config.mjs';
import request from "request";

export default (app, options) => {

    /**
     * @api {get} /cat/breeds List all available cat breeds
     * @apiName GetBreeds
     * @apiGroup Cat
     *
     * @apiSuccess {Object} weight The weight of the cat (imperial and metric).
     * @apiSuccess {String} id The breed ID of the cat.
     * @apiSuccess {String} name The name of the cat
     * @apiSuccess {String} description The description of the cat.
     * @apiSuccess {String} origin The origin of the cat.
     * @apiSuccess {String} country_code The code of the cat's country of origin.
     * @apiSuccess {String} life_span The average lifespan of the cat.
     * @apiSuccess {String} adaptability The cat's level of adaptability (1 to 5).
     * @apiSuccess {String} affection_level The cat's level of affection (1 to 5).
     * @apiSuccess {String} child_friendly The cat's level of child friendly (1 to 5).
     * @apiSuccess {String} dog_friendly The cat's level of dog friendly (1 to 5).
     * @apiSuccess {String} energy_level The cat's level of energy (1 to 5).
     * @apiSuccess {String} grooming The cat's level of grooming (1 to 5).
     * @apiSuccess {String} health_issues The cat's level of health issues (1 to 5).
     * @apiSuccess {String} intelligence The cat's level of intelligence (1 to 5).
     * @apiSuccess {String} shedding_level The cat's level of shedding (1 to 5).
     * @apiSuccess {String} social_needs The cat's level of social needs (1 to 5).
     * @apiSuccess {String} stranger_friendly The cat's level of stranger friendly (1 to 5).
     * @apiSuccess {String} vocalisation The cat's level of vocalisation (1 to 5).
     * @apiSuccess {String} wikipedia_url The Wikipedia link about the cat breed.
     */
    app.get(`${apiSettings.path_prefix}breeds`, (req, res, next) => {
        const options = {
            url: `${apiSettings.url}breeds`,
            headers: {
                'x-api-key': apiSettings.key
            }
        };

        function callback(error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                res.json(JSON.parse(body))
            }
        }

        request(options, callback);
    });

    /**
     * @api {get} /cat/info/:breed Get information about the cat's breed
     * @apiName GetBreed
     * @apiGroup Cat
     *
     * @apiParam {String} breed The cat's breed or its id.
     * Example:
     *  - 'abys' or 'Abyssinian'
     *  - 'amis' or 'Australian Mist'
     *  - 'norw' or 'Norwegian Forest Cat'
     *  - 'tonk' or 'Tonkinese'
     *
     * @apiSuccess {Object} weight The weight of the cat (imperial and metric).
     * @apiSuccess {String} id The breed ID of the cat.
     * @apiSuccess {String} name The name of the cat
     * @apiSuccess {String} description The description of the cat.
     * @apiSuccess {String} origin The origin of the cat.
     * @apiSuccess {String} country_code The code of the cat's country of origin.
     * @apiSuccess {String} life_span The average lifespan of the cat.
     * @apiSuccess {String} adaptability The cat's level of adaptability (1 to 5).
     * @apiSuccess {String} affection_level The cat's level of affection (1 to 5).
     * @apiSuccess {String} child_friendly The cat's level of child friendly (1 to 5).
     * @apiSuccess {String} dog_friendly The cat's level of dog friendly (1 to 5).
     * @apiSuccess {String} energy_level The cat's level of energy (1 to 5).
     * @apiSuccess {String} grooming The cat's level of grooming (1 to 5).
     * @apiSuccess {String} health_issues The cat's level of health issues (1 to 5).
     * @apiSuccess {String} intelligence The cat's level of intelligence (1 to 5).
     * @apiSuccess {String} shedding_level The cat's level of shedding (1 to 5).
     * @apiSuccess {String} social_needs The cat's level of social needs (1 to 5).
     * @apiSuccess {String} stranger_friendly The cat's level of stranger friendly (1 to 5).
     * @apiSuccess {String} vocalisation The cat's level of vocalisation (1 to 5).
     * @apiSuccess {String} wikipedia_url The Wikipedia link about the cat breed.
     */
    app.get(`${apiSettings.path_prefix}info/:breed`, (req, res, next) => {
        let breed = req.params.breed

        const options = {
            url: `${apiSettings.url}breeds/search?q=${breed}`,
            headers: {
                'x-api-key': apiSettings.key
            }
        };

        function callback(error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                res.json(JSON.parse(body))
            }
        }

        request(options, callback);
    });

    /**
     * @api {get} /cat/image/breed/:breed_id Get a random image about the cat's breed
     * @apiName GetImageBreed
     * @apiGroup Cat
     *
     * @apiParam {String} breed_id The cat's breed id.
     * Example:
     *  - 'abys' for Abyssinian
     *  - 'amis' for Australian Mist
     *  - 'norw' for Norwegian Forest Cat
     *  - 'tonk' for Tonkinese
     *
     * @apiSuccess {Object} breeds The list of information on the breeds that match the query.
     * @apiSuccess {String} id The id of the image.
     * @apiSuccess {String} url The url of the image.
     * @apiSuccess {Number} width The width of the image.
     * @apiSuccess {Number} height The height of the image.
     */
    app.get(`${apiSettings.path_prefix}image/breed/:breed_id`, (req, res, next) => {
        let breed_id = req.params.breed_id

        const options = {
            url: `${apiSettings.url}images/search?breed_ids=${breed_id}`,
            headers: {
                'x-api-key': apiSettings.key
            }
        };

        function callback(error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                res.json(JSON.parse(body))
            }
        }

        request(options, callback);
    });

    /**
     * @api {get} /cat/categories List all available categories
     * @apiName GetCategories
     * @apiGroup Cat
     *
     * @apiSuccess {Number} id The id of the category.
     * @apiSuccess {String} name The name of the category.
     */
    app.get(`${apiSettings.path_prefix}categories`, (req, res, next) => {
        const options = {
            url: `${apiSettings.url}categories`,
            headers: {
                'x-api-key': apiSettings.key
            }
        };

        function callback(error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                res.json(JSON.parse(body))
            }
        }

        request(options, callback);
    });

    /**
     * @api {get} /cat/image/category/:category_id Get a random image according to a category
     * @apiName GetImageCategory
     * @apiGroup Cat
     *
     * @apiParam {String} category_id The category id.
     * Example:
     *  - 1: hats
     *  - 2: space
     *  - 4: sunglasses
     *  - 5: boxes
     *  - 7: ties
     *  - 14: sinks
     *  - 15: clothes
     *
     * @apiSuccess {Object} breeds The list of information on the breeds that match the query.
     * @apiSuccess {Object} categories The list of information on the categories that match the query.
     * @apiSuccess {String} id The id of the image.
     * @apiSuccess {String} url The url of the image.
     * @apiSuccess {Number} width The width of the image.
     * @apiSuccess {Number} height The height of the image.
     */
    app.get(`${apiSettings.path_prefix}image/category/:category_id`, (req, res, next) => {
        let category_id = req.params.category_id

        const options = {
            url: `${apiSettings.url}images/search?category_ids=${category_id}`,
            headers: {
                'x-api-key': apiSettings.key
            }
        };

        function callback(error, response, body) {
            if (response && response.statusCode !== 200) {
                res.sendStatus(response.statusCode);
            } else if (error) {
                res.sendStatus(404);
            } else {
                res.json(JSON.parse(body))
            }
        }

        request(options, callback);
    });

};