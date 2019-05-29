"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
class HttpClient {
    /**
     * @param {String} apiToken - Wakanow API token
     * @param {Object} options - Additional options
     * @param {String} options.protocol - request protocol
     * @param {String} options.hostname - wakanow api base url
     * @param {String} options.path Wakanow api resource path
     * @param {String} options.method request method
     * @param {Object} options.requestPayload payload for requests that are not GET
     */
    constructor(options, apiToken) {
        this.apiToken = apiToken;
        this.options = options;
    }
    /**
     * @return {Promise} response
     */
    sendRequest(urlEncoded) {
        const buffer = [];
        let headers;
        let statusCode;
        let bufsize = 0;
        return new Promise((resolve, reject) => {
            const { hostname, protocol, path, method, requestPayload, } = this.options;
            request_1.default({
                method,
                uri: `${protocol}://${hostname}${path}`,
                headers: this.generateRequestHeaders(urlEncoded),
                form: requestPayload,
            }).on("error", (error) => {
                return reject({
                    headers,
                    statusCode,
                    body: error,
                });
            }).on("data", (data) => {
                buffer.push(data);
                bufsize += data.length;
            })
                .on("end", () => {
                const body = Buffer.concat(buffer, bufsize);
                return resolve({
                    headers,
                    statusCode,
                    data: JSON.parse(body.toString("utf8")),
                });
            })
                .on("response", (res) => {
                headers = res.headers;
                statusCode = res.statusCode;
            });
        });
    }
    generateRequestHeaders(urlEncoded) {
        return {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": urlEncoded ? `application/${urlEncoded}` : "Application/json",
        };
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=index.js.map