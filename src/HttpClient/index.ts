import Request from 'request';

import {
  HttpClientConfig,
  ResponseHeaders
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
    let headers: {
      'content-length'?: string;
      'content-type'?: string;
    };
    let statusCode: number;
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
        return reject({
          statusCode,
          headers,
          error
        })
      }).on('data', (data: Buffer) => {
        return resolve({
          statusCode,
          headers,
          data: data.toString('utf8')
        })
      })
      .on('response', (res: ResponseHeaders) => {
        headers = res.headers;
        statusCode = res.statusCode;
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
