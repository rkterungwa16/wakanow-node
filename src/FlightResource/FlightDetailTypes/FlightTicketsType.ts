import {
  FlightBookingSummaryModel
} from './BookFlightType'

export interface FlightTicketRequestBody {
  BookingId: string;
  PnrNumber: string;
}

export interface FlightTicketResponseBody {
  BookingId: string;
  CustomerId: string;
  ProductType: string;
  FlightBookingSummary: FlightBookingSummaryModel;
  ProductTermsAndConditions: null;
}
