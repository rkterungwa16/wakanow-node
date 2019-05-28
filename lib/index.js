"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlightResource_1 = require("./FlightResource");
const Authentication_1 = require("./Authentication/");
/**
 * Wakanow
 */
class Wakanow {
    /**
     * @param {String} apiToken - wakanow api token
     * @param {String} environment - api environment
     */
    constructor(environment, apiToken) {
        this.FlightResource = new FlightResource_1.FlightResource(environment, apiToken);
        this.Authentication = new Authentication_1.Authentication(environment);
    }
}
exports.Wakanow = Wakanow;
//# sourceMappingURL=index.js.map