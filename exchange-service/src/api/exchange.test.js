/* eslint-env mocha */
import {apiSettings, serverSettings} from "../config/config.mjs";
import request from "supertest";
import startServer from "../server/server.mjs";

describe('Exchange api', () => {
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

    it('can get information about the exchange currency', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}currency/btc:eth`)
            .expect(200, done)
    })

    it('can get information about a quote', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}share/msft`)
            .expect(200, done)
    })

    it('can display sector performance information by a rank.', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}performance/d`)
            .expect(200, done)
    })

    it('can display all sector performance information.', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}performance`)
            .expect(200, done)
    })
})