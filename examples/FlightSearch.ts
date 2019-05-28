import {
  Wakanow,
} from "../src";

import { config } from "./config";

const wakanowNode = new Wakanow("development", config.accessToken);

wakanowNode.flightResource.flightSearch(
  {
    FlightSearchType: "Oneway",
    Adults: 1,
    Children: 0,
    Infants: 0,
    Ticketclass: "Y",
    TargetCurrency: "NGN",
    Itineraries: [
      {
        Departure: "LOS",
        Destination: "DXB",
        DepartureDate: "11/15/2019",
      },
    ],
  },
)
.then((response) => {
  console.log("response", response);
});
