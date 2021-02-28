'use strict'

import dotenv from 'dotenv';

dotenv.config({path:process.env.PWD + '/src/config/.env'});

export const serverSettings = {
    port: process.env.PORT,
}

export const apiSettings = {
    path_prefix: process.env.PATH_PREFIX,
    key: process.env.THE_CAT_API_KEY,
    url: process.env.THE_CAT_API_URL
}