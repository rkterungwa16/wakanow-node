import {
  Wakanow,
} from "../src";

import {
  config,
} from "./config";

const wakanowNode = new Wakanow("development", config.accessToken);

wakanowNode.flightResource.selectFlight(
  {
    TargetCurrency: "NGN",
    SelectData: config.selectData,
  },
).then((response) => {
  console.log("response", response);
});
