
import {
  HttpClient,
} from "../HttpClient";

import {
  FlightSearchRequestBody,
  FlightSearchResponseBody,
  SelectFlightRequestBody,
  SelectFlightResponseBody,
  BookFlightRequestBody,
  BookFlightResponseBody,
  FlightTicketRequestBody,
  FlightTicketResponseBody,
  environment,
} from "../Types";

/**
 *  Manage Passenger flight
 */
export class FlightResource {
  apiToken: string;
  environment: environment;
  hostname: string;
  /**
   * @param {String} apiToken - Wakanow API token
   */
  constructor(environment: environment, apiToken: string) {
    this.apiToken = apiToken;
    this.environment = environment;
    this.hostname = environment !== "production" ?
    "wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net" : "";
  }

  /**
   * @return {Promise} return results for flight search
   */
  flightSearch (requestPayload: FlightSearchRequestBody): Promise<FlightSearchResponseBody[]> {
    const method = "post";
    const path = "/api/flight/search";
    const protocol = "https";

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          path,
          requestPayload,
          method,
          protocol,
          hostname: this.hostname,
        },
        this.apiToken,
      ).sendRequest()
        .then((response: string) => {
          resolve(JSON.parse(response));
        })
        .catch(err => reject(err));
    });
  }

  /**
   * @return {Promise} return results for selected flight
   */
  selectFlight (requestPayload: SelectFlightRequestBody): Promise<SelectFlightResponseBody> {
    const method = "post";
    const path = "/api/flight/select";
    const protocol = "https";

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          path,
          requestPayload,
          method,
          protocol,
          hostname: this.hostname,
        },
        this.apiToken,
      ).sendRequest()
        .then((response: string) => resolve(JSON.parse(response)))
        .catch(err => reject(err));
    });
  }

  /**
   * @return {Promise} return results for booking of flight
   */
  flightBooking (requestPayload: BookFlightRequestBody): Promise<BookFlightResponseBody> {
    const method = "post";
    const path = "/api/flight/book";
    const protocol = "https";

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          path,
          requestPayload,
          method,
          protocol,
          hostname: this.hostname,
        },
        this.apiToken,
      ).sendRequest()
        .then((response: string) => resolve(JSON.parse(response)))
        .catch(err => reject(err));
    });
  }

  /**
   * @return {Promise} return results for flight ticket
   */
  flightTicket (requestPayload: FlightTicketRequestBody): Promise<FlightTicketResponseBody> {
    const method = "post";
    const path = "/api/flight/ticketpnr";
    const protocol = "https";

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          path,
          requestPayload,
          method,
          protocol,
          hostname: this.hostname,
        },
        this.apiToken,
      ).sendRequest()
        .then((response: string) => resolve(JSON.parse(response)))
        .catch(err => reject(err));
    });
  }

  /**
   * @return {Promise} return results for airports
   */
  getAirports (): Promise<{}> {
    const method = "get";
    const path = "/api/flight/airports";
    const protocol = "https";

    return new Promise((resolve, reject) => {
      new HttpClient(
        {
          path,
          method,
          protocol,
          hostname: this.hostname,
        },
        this.apiToken,
      ).sendRequest()
        .then((response: string) => {
          return resolve(response);
        })
        .catch(err => reject(err));
    });
  }
}
