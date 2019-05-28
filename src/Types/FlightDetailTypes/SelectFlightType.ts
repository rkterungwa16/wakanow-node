import {
  FlightSummaryModel,
} from "./FlightDetailTypes";
export interface SelectFlightRequestBody {
  TargetCurrency: string;
  SelectData: string;
}
export interface SelectFlightResponseBody {
  FlightSummaryModel: FlightSummaryModel;
  BookingId: string;
}
