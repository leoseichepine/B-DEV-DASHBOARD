/* eslint-env mocha */
import {apiSettings, serverSettings} from "../config/config.mjs";
import request from "supertest";
import startServer from "../server/server.mjs";

describe('Spotify api', () => {
    let app = null

    beforeEach(() => {
        return startServer({
            port: serverSettings.port,
            path_prefix: apiSettings.path_prefix,
            client_id: apiSettings.client_id,
            client_secret: apiSettings.client_secret,
            redirect_uri: apiSettings.redirect_uri
        }).then(serv => {
            app = serv
        })
    })

    afterEach(() => {
        app.close()
        app = null
    })

    it('can get user playlists', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}user/playlists`)
            .expect(200, done)
    })

    it('can get user saved albums', (done) => {
        request(app)
            .get(`${apiSettings.path_prefix}user/saved-albums`)
            .expect(200, done)
    })

})