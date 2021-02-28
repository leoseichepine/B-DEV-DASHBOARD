'use strict'

import aboutResponse from '../delivery/about+response.mjs';

export default (app, options) => {
    // Show about.json
    app.get('/about.json', (req, res, next) => {
        res.json(aboutResponse());
    });
};