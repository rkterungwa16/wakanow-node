
import {
  Wakanow,
} from "../src";

import { config } from "./config";

const wakanowNode = new Wakanow("development" , config.accessToken);

wakanowNode.flightResource.flightBooking(
  {
    PassengerDetails: [
      {
        PassengerType: "Adult",
        FirstName: "Adeniyi",
        MiddleName: "",
        LastName: "Adedotun",
        DateOfBirth: "09/14/1990",
        PhoneNumber: "+0902343423",
        Address: "No 43, Lagos Str.",
        PassportNumber: "",
        ExpiryDate: "",
        PassportIssuingAuthority: "",
        Email: "olas1@gmail.com",
        Gender: "Female",
        Title: "Ms",
        City: "nisun",
        Country: "Nigeria",
        CountryCode: "NG",
        PostalCode: "100001",
      },
    ],
    BookingItemModels: [{
      ProductType: "Flight",
      BookingData: config.bookingData,
      BookingId: "1707310600002",
      TargetCurrency: "NGN",
    },
    ],

  },
).then((response) => {
  console.log("response", response);
});
