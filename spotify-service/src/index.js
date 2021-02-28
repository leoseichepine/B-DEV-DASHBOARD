'use strict'

import { apiSettings, serverSettings } from './config/config.mjs';
import startServer from './server/server.mjs'

console.log('--- Spotify Service ---')

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})

process.on('SIGTERM', signal => {
    console.log(`Process ${process.pid} received a SIGTERM signal`)
    process.exit(0)
})

process.on('SIGINT', signal => {
    console.log(`Process ${process.pid} has been interrupted`)
    process.exit(0)
})

startServer({
    port: serverSettings.port,
    path_prefix: apiSettings.path_prefix,
    client_id: apiSettings.client_id,
    client_secret: apiSettings.client_secret,
    redirect_uri: apiSettings.redirect_uri
}).then(app => {
    console.log(`Server started successfully, running on port: ${serverSettings.port}.`)
})