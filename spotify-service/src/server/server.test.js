/* eslint-env mocha */
import startServer from "./server.mjs";
import {apiSettings, serverSettings} from "../config/config.mjs";
import chai from "chai"

describe('Server', () => {
    it('should require a port to start', () => {
        chai.expect(serverSettings.port).to.not.be.undefined
    })
    it('should require a client ID', () => {
        chai.expect(apiSettings.client_id).to.not.be.undefined
    })
    it('should require a client secret', () => {
        chai.expect(apiSettings.client_secret).to.not.be.undefined
    })
    it('should require a redirect uri', () => {
        chai.expect(apiSettings.redirect_uri).to.not.be.undefined
    })
})