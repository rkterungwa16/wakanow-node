import {
  FlightResource
} from './FlightResource'


/**
 * Wakanow
 */
export class Wakanow {
  FlightResource: FlightResource;
  /**
   * @param {String} apiToken - wakanow api token
   */
  constructor (apiToken: string) {
    this.FlightResource = new FlightResource(apiToken)
  }
}
