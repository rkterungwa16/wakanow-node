import { HttpClientConfig } from "../Types";
export declare class HttpClient {
    apiToken: string;
    options: HttpClientConfig;
    /**
     * @param {String} apiToken - Wakanow API token
     * @param {Object} options - Additional options
     * @param {String} options.protocol - request protocol
     * @param {String} options.hostname - wakanow api base url
     * @param {String} options.path Wakanow api resource path
     * @param {String} options.method request method
     * @param {Object} options.requestPayload payload for requests that are not GET
     */
    constructor(options: HttpClientConfig, apiToken?: string);
    /**
     * @return {Promise} response
     */
    sendRequest(urlEncoded?: "x-www-form-urlencoded"): Promise<{}>;
    private generateRequestHeaders;
}
