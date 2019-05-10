
import {
  HttpClient
} from '../HttpClient'

import {
  FlightSearchRequestBody,
  FlightSearchResponseBody,
  SelectFlightRequestBody,
  SelectFlightResponseBody,
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
  flightSearch (requestPayload: FlightSearchRequestBody): Promise<FlightSearchResponseBody> {
    const method = 'post';
    const path = '/api/flight/search';
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
        },
        this.apiToken
      ).sendRequest()
        .then((response: FlightSearchResponseBody) => resolve(response))
        .catch(err => reject(err))
    })
  }

  /**
   * @return {Promise} return results for selected flight
   */
  selectFlight (requestPayload: SelectFlightRequestBody): Promise<SelectFlightResponseBody> {
    const method = 'post';
    const path = '/api/flight/select';
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
        },
        this.apiToken
      ).sendRequest()
        .then((response: SelectFlightResponseBody) => resolve(response))
        .catch(err => reject(err))
    })
  }

  /**
   * @return {Promise} return results for booking of flight
   */
  flightBooking (requestPayload: BookFlightRequestBody): Promise<BookFlightResponseBody> {
    const method = 'post';
    const path = '/api/flight/book';
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
        },
        this.apiToken
      ).sendRequest()
        .then((response: BookFlightResponseBody) => resolve(response))
        .catch(err => reject(err))
    })
  }

  /**
   * @return {Promise} return results for flight ticket
   */
  flightTicket (requestPayload: FlightTicketRequestBody): Promise<FlightTicketResponseBody> {
    const method = 'post';
    const path = '/api/flight/ticketpnr';
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
        },
        this.apiToken
      ).sendRequest()
        .then((response: FlightTicketResponseBody) => resolve(response))
        .catch(err => reject(err))
    })
  }

  /**
   * @return {Promise} return results for airports
   */
  getAirports (): Promise<{}> {
    const method = 'get';
    const path = '/api/flight/airports';
    const hostname = 'wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net';
    const protocol = 'https';

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          method,
          protocol,
          hostname,
          path
        },
        this.apiToken
      ).sendRequest()
        .then((response: string) => {
          return resolve(response)
        })
        .catch(err => reject(err))
    })
  }
}
