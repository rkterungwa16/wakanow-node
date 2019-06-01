import {
  Wakanow,
} from "../src";

import {
  config,
} from "./config";

const wakanowNode = new Wakanow("development" , config.accessToken);

wakanowNode.flightResource.getAirports().then((response) => {
  console.log("response", response);
});
