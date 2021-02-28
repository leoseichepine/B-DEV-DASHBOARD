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

    it('can list all available cat breeds', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}breeds`)
            .expect(200, done)
    })

    it('can gets information about the breed of a cat', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}info/abys`)
            .expect(200, done)
    })

    it('can get a random image of a cat by breed id', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}image/breed/norw`)
            .expect(200, done)
    })

    it('can list all available categories', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}categories`)
            .expect(200, done)
    })

    it('can get a random image of a cat by category', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}image/category/1`)
            .expect(200, done)
    })

})