import Request from 'request';

import {
  HttpClientConfig,
  Headers
} from '../Types'


export class HttpClient {
  apiToken: string;
  options: HttpClientConfig;
  /**
   * @param {String} apiToken - Wakanow API token
   * @param {Object} options - Additional options
   * @param {String} options.protocol - request protocol
   * @param {String} options.hostname - quickteller SVA api base url
   * @param {String} options.path Wakanow api resource path
   * @param {String} options.method request method
   * @param {Object} options.requestPayload payload for requests that are not GET
   */
  constructor(apiToken: string, options: HttpClientConfig) {
    this.apiToken = apiToken;
    this.options = options
  }

  /**
   * @return {Promise} response
   */

  public sendRequest() {
    return new Promise((
      resolve,
      reject
    ) => {
      const {
        hostname,
        protocol,
        path,
        method,
        requestPayload
      } = this.options;
      Request({
        method: method,
        uri: `${protocol}://${hostname}${path}`,
        headers: this.generateRequestHeaders(),
        form: requestPayload
      }).on('error', (error) => {
        return reject(error)
      }).on('data', (data) => {
        return resolve(data.toString('utf8'))
      })
    })
  }

  private generateRequestHeaders() {
    return {
      Authorization: `Bearer ${this.apiToken}`,
      'Content-Type': 'Application/json'
    }
  }
}
