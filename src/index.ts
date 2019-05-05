import {
  FlightResource
} from './FlightResource';

import {
  Authentication
} from './Authentication/'


/**
 * Wakanow
 */
export class Wakanow {
  FlightResource: FlightResource;
  Authentication: Authentication;
  /**
   * @param {String} apiToken - wakanow api token
   */
  constructor (apiToken?: string) {
    this.FlightResource = new FlightResource(apiToken);
    this.Authentication = new Authentication();
  }
}
