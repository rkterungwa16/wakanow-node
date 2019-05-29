import { FlightSearchRequestBody, FlightSearchResponseBody, SelectFlightRequestBody, SelectFlightResponseBody, BookFlightRequestBody, BookFlightResponseBody, FlightTicketRequestBody, FlightTicketResponseBody, environment } from "../Types";
/**
 *  Manage Passenger flight
 */
export declare class FlightResource {
    apiToken: string;
    environment: environment;
    hostname: string;
    /**
     * @param {String} apiToken - Wakanow API token
     */
    constructor(environment: environment, apiToken: string);
    /**
     * @return {Promise} return results for flight search
     */
    flightSearch(requestPayload: FlightSearchRequestBody): Promise<FlightSearchResponseBody>;
    /**
     * @return {Promise} return results for selected flight
     */
    selectFlight(requestPayload: SelectFlightRequestBody): Promise<SelectFlightResponseBody>;
    /**
     * @return {Promise} return results for booking of flight
     */
    flightBooking(requestPayload: BookFlightRequestBody): Promise<BookFlightResponseBody>;
    /**
     * @return {Promise} return results for flight ticket
     */
    flightTicket(requestPayload: FlightTicketRequestBody): Promise<FlightTicketResponseBody>;
    /**
     * @return {Promise} return results for airports
     */
    getAirports(): Promise<{}>;
}
