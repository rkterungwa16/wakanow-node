"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = require("../HttpClient");
class Authentication {
    constructor(environment) {
        this.environment = environment;
    }
    generateToken(requestPayload) {
        const method = "post";
        const path = "/token";
        const hostname = this.environment !== "production" ?
            "wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net" :
            "";
        const protocol = "https";
        return new Promise((resolve, reject) => {
            new HttpClient_1.HttpClient({
                method,
                protocol,
                hostname,
                path,
                requestPayload,
            }).sendRequest("x-www-form-urlencoded")
                .then((response) => {
                resolve(response);
            })
                .catch((err) => reject(err));
        });
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=index.js.map