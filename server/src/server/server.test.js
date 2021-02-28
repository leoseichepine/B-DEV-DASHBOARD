/* eslint-env mocha */
import startServer from "./server.mjs";
import {serverSettings} from "../config/config.mjs";
import chai from "chai"

describe('Server', () => {
    it('should require a port to start', () => {
        chai.expect(serverSettings.port).to.not.be.undefined
    })
})