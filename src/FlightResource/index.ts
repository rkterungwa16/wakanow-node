import {
  HttpClient
} from '../HttpClient'

import {
  FlightSearchRequestBody,
  FlightSearchResponseBody,
  SelectFlightRequestBody,
  BookFlightRequestBody,
  BookFlightResponseBody,
  FlightTicketRequestBody,
  FlightTicketResponseBody
} from '../Types'

/**
 *  Manage Passenger flight
 */
export class FlightResource {
  apiToken: string;
  /**
   * @param {String} apiToken - Wakanow API token
   */
  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }
  /**
   * @return {Promise} return results for flight search
   */
  flightSearch (requestPayload: FlightSearchRequestBody) {
    const method = 'post';
    const path = '/api/flight/search';
    const hostname = 'wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net';
    const protocol = 'https';

    return new Promise((resolve, reject) => {
      new HttpClient(
        this.apiToken,
        {
          method,
          protocol,
          hostname,
          path,
          requestPayload
        }
      ).sendRequest()
        .then((response: FlightSearchResponseBody) => resolve(response))
        .catch(err => reject(err))
    })
  }
}
