import {
  HttpClient
} from '../HttpClient'
import {
  AuthenticationRequestBody, AuthenticationSuccessResponseBody
} from '../Types';

export class Authentication {
  generateToken(requestPayload: AuthenticationRequestBody): Promise<AuthenticationSuccessResponseBody> {
    const method = 'post';
    const path = '/token';
    const hostname = 'wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net';
    const protocol = 'https';

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          method,
          protocol,
          hostname,
          path,
          requestPayload
        }
      ).sendRequest('x-www-form-urlencoded')
        .then((response: AuthenticationSuccessResponseBody) => resolve(response))
        .catch(err => reject(err))
    })
  }
}
