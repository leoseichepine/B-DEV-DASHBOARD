'use strict'

import dotenv from 'dotenv';

dotenv.config({path:process.env.PWD + '/src/config/.env'});

export const serverSettings = {
    port: process.env.PORT,
}

export const apiSettings = {
    path_prefix: process.env.PATH_PREFIX,
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI
}