import { FlightBookingSummaryModel } from "./BookFlightType";
import { ResponseHeaders } from "../";
export interface FlightTicketRequestBody {
    BookingId: string;
    PnrNumber: string;
}
export interface FlightTicketResponseBody extends ResponseHeaders {
    data: {
        BookingId: string;
        CustomerId: string;
        ProductType: string;
        FlightBookingSummary: FlightBookingSummaryModel;
        ProductTermsAndConditions: undefined;
    };
}
