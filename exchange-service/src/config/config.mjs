'use strict'

import dotenv from 'dotenv';

dotenv.config({path:process.env.PWD + '/src/config/.env'});

export const serverSettings = {
    port: process.env.PORT,
}

export const apiSettings = {
    path_prefix: process.env.PATH_PREFIX,
    key: process.env.EXCHANGE_API_KEY,
    url: process.env.EXCHANGE_API_URL
}