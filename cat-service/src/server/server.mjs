'use strict'

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import api from '../api/cat.mjs';
import cors from 'cors'

const startServer = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      reject(new Error('The server must be started with an available port.'))
    }
    if (options.api_key === undefined || options.api_url === undefined) {
      reject(new Error('Undefined api configuration.'))
    }
    // Init a express app, and add some middlewares
    const app = express()
    app.use(morgan('dev'))
    app.use(helmet())
    app.use(cors())
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
    })

    // Add the api's to the express app
    api(app, options)

    // Start the server, and return the newly created server
    const server = app.listen(options.port, () => resolve(server))
  })
}

export default startServer