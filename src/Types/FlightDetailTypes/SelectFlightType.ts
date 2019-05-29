import {
  FlightSummaryModel,
} from "./FlightDetailTypes";

import {
  ResponseHeaders,
} from "../";
export interface SelectFlightRequestBody {
  TargetCurrency: string;
  SelectData: string;
}
export interface SelectFlightResponseBody extends ResponseHeaders {
  data: {
    FlightSummaryModel: FlightSummaryModel;
    BookingId: string;
  };
}
