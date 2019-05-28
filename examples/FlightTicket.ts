import {
  Wakanow,
} from "../src";

import {
  config,
} from "./config";

const wakanowNode = new Wakanow("development", config.accessToken);

wakanowNode.flightResource.flightTicket(
  {
    BookingId: "1707310600002",
    PnrNumber: "UPTR7U",
  },
).then((response) => {
  console.log("response", response);
});
