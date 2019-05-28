import {
  HttpClient,
} from "../HttpClient";
import {
  AuthenticationRequestBody,
  AuthenticationSuccessResponseBody,
  environment,
} from "../Types";

export class Authentication {
  private environment: environment;
  constructor(environment: environment) {
    this.environment = environment;
  }
  generateToken(requestPayload: AuthenticationRequestBody): Promise<any> {
    const method = "post";
    const path = "/token";
    const hostname = this.environment !== "production" ?
    "wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net" :
    "";
    const protocol = "https";

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          method,
          protocol,
          hostname,
          path,
          requestPayload,
        },
      ).sendRequest("x-www-form-urlencoded")
        .then((response: string) => {
          resolve(JSON.parse(response));
        })
        .catch(err => reject(err));
    });
  }
}
