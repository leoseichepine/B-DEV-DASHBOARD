'use strict'

import startServer from './server/server.mjs'
import {serverSettings} from "./config/config.mjs";

console.log('--- Server ---')

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
}).then(app => {
    console.log(`Server started successfully, running on port: ${serverSettings.port}.`)
})