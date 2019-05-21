import {
  FlightResource
} from './FlightResource';

import {
  Authentication
} from './Authentication/'

import {
  environment
} from './Types'


/**
 * Wakanow
 */
export class Wakanow {
  FlightResource: FlightResource;
  Authentication: Authentication;
  /**
   * @param {String} apiToken - wakanow api token
   * @param {String} environment - api environment
   */
  constructor (environment: environment, apiToken?: string) {
    this.FlightResource = new FlightResource(environment, apiToken);
    this.Authentication = new Authentication(environment);
  }
}
