import { FlightResource } from "./FlightResource";
import { Authentication } from "./Authentication/";
import { environment } from "./Types";
export * from "./Types";
/**
 * Wakanow
 */
export declare class Wakanow {
    flightResource: FlightResource;
    authentication: Authentication;
    /**
     * @param {String} apiToken - wakanow api token
     * @param {String} environment - api environment
     */
    constructor(environment: environment, apiToken?: string);
}
