'use strict'

import request from 'request';
import {apiSettings, apiSettings as api} from '../config/config.mjs';
import SpotifyWebApi from 'spotify-web-api-node';

export default (app, options) => {
    // Get albums in the signed in user's Your Music library
    const spotifyApi = new SpotifyWebApi({
        clientId: options.client_id,
        clientSecret: options.client_secret,
        redirectUri: options.redirect_uri
    });

    const scopes = ['user-read-private', 'user-read-email','playlist-modify-public','playlist-modify-private', 'user-library-read']

    app.get('/callback', async (req,res) => {
        const { code } = req.query;
        console.log(code)
        try {
            let data = await spotifyApi.authorizationCodeGrant(code)
            const { access_token, refresh_token } = data.body;
            spotifyApi.setAccessToken(access_token);
            spotifyApi.setRefreshToken(refresh_token);

            res.status(200).send(code)
        } catch(err) {
            console.log("Used has refused to connect to the api")
            res.status(400).send(err)
        }
    });

    /**
     * Connect to the Spotify api. Show dialog.
     */
    app.get(`${apiSettings.path_prefix}user/connect`, (req, res, next) => {
        let html = spotifyApi.createAuthorizeURL(scopes)
        console.log(html)
        res.redirect(html+"&show_dialog=true")
    });

    app.get(`${apiSettings.path_prefix}user/playlists`, async (req,res) => {
        try {
            let result = await spotifyApi.getUserPlaylists();
            console.log(result.body);
            res.status(200).send(result.body);
        } catch (err) {
            res.status(400).send(err)
        }
    });

    // Get albums in the signed in user's Your Music library
    app.get(`${apiSettings.path_prefix}user/saved-albums`, async (req, res, next) => {
        try {
            let result = await spotifyApi.getMySavedAlbums({
                limit : 1,
                offset: 0
            })
            console.log(result.body.items);
            res.status(200).send(result.body);
        } catch (err) {
            res.status(400).send(err)
        }
    });
};
