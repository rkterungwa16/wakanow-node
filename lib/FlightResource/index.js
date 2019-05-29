"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = require("../HttpClient");
/**
 *  Manage Passenger flight
 */
class FlightResource {
    /**
     * @param {String} apiToken - Wakanow API token
     */
    constructor(environment, apiToken) {
        this.apiToken = apiToken;
        this.environment = environment;
        this.hostname = environment !== "production" ?
            "wakanow-api-affiliate-b2b-devtest-test.azurewebsites.net" : "";
    }
    /**
     * @return {Promise} return results for flight search
     */
    flightSearch(requestPayload) {
        const method = "post";
        const path = "/api/flight/search";
        const protocol = "https";
        return new Promise((resolve, reject) => {
            new HttpClient_1.HttpClient({
                path,
                requestPayload,
                method,
                protocol,
                hostname: this.hostname,
            }, this.apiToken).sendRequest()
                .then((response) => {
                resolve(response);
            })
                .catch(err => reject(err));
        });
    }
    /**
     * @return {Promise} return results for selected flight
     */
    selectFlight(requestPayload) {
        const method = "post";
        const path = "/api/flight/select";
        const protocol = "https";
        return new Promise((resolve, reject) => {
            new HttpClient_1.HttpClient({
                path,
                requestPayload,
                method,
                protocol,
                hostname: this.hostname,
            }, this.apiToken).sendRequest()
                .then((response) => resolve(response))
                .catch(err => reject(err));
        });
    }
    /**
     * @return {Promise} return results for booking of flight
     */
    flightBooking(requestPayload) {
        const method = "post";
        const path = "/api/flight/book";
        const protocol = "https";
        return new Promise((resolve, reject) => {
            new HttpClient_1.HttpClient({
                path,
                requestPayload,
                method,
                protocol,
                hostname: this.hostname,
            }, this.apiToken).sendRequest()
                .then((response) => resolve(response))
                .catch(err => reject(err));
        });
    }
    /**
     * @return {Promise} return results for flight ticket
     */
    flightTicket(requestPayload) {
        const method = "post";
        const path = "/api/flight/ticketpnr";
        const protocol = "https";
        return new Promise((resolve, reject) => {
            new HttpClient_1.HttpClient({
                path,
                requestPayload,
                method,
                protocol,
                hostname: this.hostname,
            }, this.apiToken).sendRequest()
                .then((response) => resolve(response))
                .catch(err => reject(err));
        });
    }
    /**
     * @return {Promise} return results for airports
     */
    getAirports() {
        const method = "get";
        const path = "/api/flight/airports";
        const protocol = "https";
        return new Promise((resolve, reject) => {
            new HttpClient_1.HttpClient({
                path,
                method,
                protocol,
                hostname: this.hostname,
            }, this.apiToken).sendRequest()
                .then((response) => {
                return resolve(response);
            })
                .catch(err => reject(err));
        });
    }
}
exports.FlightResource = FlightResource;
//# sourceMappingURL=index.js.map