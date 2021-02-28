'use strict'

import express from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import helmet from 'helmet';
import api from '../api/about.mjs';
import cors from 'cors';
import mongoose from 'mongoose';
import userController from './../users/user.controller.mjs'

const startServer = (options) => {
    return new Promise((resolve, reject) => {
        if (!options.port) {
            reject(new Error('The server must be started with an available port.'))
        }

        // Init a express app, and add some middlewares
        const app = express()

        app.use(morgan('dev'))
        app.use(helmet())

        app.use(express.json())
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(cors())
        app.options('*', cors())

        app.use((err, req, res, next) => {
            reject(new Error('Something went wrong!, err:' + err))
        })

        // Connect to DB
        const uri = "mongodb+srv://leo:vIRWombRTsUNuxid@cluster0.ihqlb.mongodb.net/local_db?retryWrites=true&w=majority";
        mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
        mongoose.Promise = global.Promise;
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('Successfully connected to mongoDB!');
        });

        // Add the api's to the express app
        api(app, options)
        app.use(userController);

        app.get('/', (req, res, next) => {
            res.send('Hello world!');
        });

        // Start the server, and return the newly created server
        const server = app.listen(options.port, () => resolve(server))
    })
}

export default startServer