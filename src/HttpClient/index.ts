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
   * @param {String} options.hostname - wakanow api base url
   * @param {String} options.path Wakanow api resource path
   * @param {String} options.method request method
   * @param {Object} options.requestPayload payload for requests that are not GET
   */
  constructor(options: HttpClientConfig, apiToken?: string) {
    this.apiToken = apiToken;
    this.options = options
  }

  /**
   * @return {Promise} response
   */

  public sendRequest(urlEncoded?: 'x-www-form-urlencoded') {
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
        headers: this.generateRequestHeaders(urlEncoded),
        form: requestPayload
      }).on('error', (error) => {
        return reject(error)
      }).on('data', (data) => {
        console.log('response data', data.toString('utf8'))
        return resolve(data.toString('utf8'))
      })
    })
  }

  private generateRequestHeaders(urlEncoded?: 'x-www-form-urlencoded') {
    return {
      Authorization: `Bearer ${this.apiToken}`,
      'Content-Type': urlEncoded ? `application/${urlEncoded}` : 'Application/json'
    }
  }
}
