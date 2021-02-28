/* eslint-env mocha */
import startServer from "./server.mjs";
import {apiSettings, serverSettings} from "../config/config.mjs";
import chai from "chai"

describe('Server', () => {
    it('should require a port to start', () => {
        chai.expect(serverSettings.port).to.not.be.undefined
    })
    it('should require an api key', () => {
        chai.expect(apiSettings.key).to.not.be.undefined
    })
    it('should require an api url', () => {
        chai.expect(apiSettings.url).to.not.be.undefined
    })
    it('should require a path prefix', () => {
        chai.expect(apiSettings.path_prefix).to.not.be.undefined
    })
})