'use strict'

import dotenv from 'dotenv';

dotenv.config({path:process.env.PWD + '/src/config/.env'});

export const serverSettings = {
    port: process.env.PORT,
}