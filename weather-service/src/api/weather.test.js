/* eslint-env mocha */
import {apiSettings, serverSettings} from "../config/config.mjs";
import request from "supertest";
import startServer from "../server/server.mjs";

describe('Weather api', () => {
    let app = null

    beforeEach(() => {
        return startServer({
            port: serverSettings.port,
            path_prefix: apiSettings.path_prefix,
            api_key: apiSettings.key,
            api_url: apiSettings.url
        }).then(serv => {
            app = serv
        })
    })

    afterEach(() => {
        app.close()
        app = null
    })

    it('can get weather by location', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}strasbourg`)
            .expect(200, done)
    })

    it('can get forecast weather by location', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}forecast/strasbourg`)
            .expect(200, done)
    })

})