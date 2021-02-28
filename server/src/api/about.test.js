/* eslint-env mocha */
import {serverSettings} from "../config/config.mjs";
import request from "supertest";
import startServer from "../server/server.mjs";

describe('Weather api', () => {
    let app = null

    beforeEach(() => {
        return startServer({
            port: serverSettings.port,
        }).then(serv => {
            app = serv
        })
    })

    afterEach(() => {
        app.close()
        app = null
    })

    it('can get about.json', (done) => {
        request(app)
            .get('/about.json')
            .expect(200, done)
    })

})