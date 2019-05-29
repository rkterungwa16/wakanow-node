import { PassengerDetail, FlightSummaryModel } from "./FlightDetailTypes";
import { ResponseHeaders } from "../";
export interface BookingItemModel {
    ProductType: string;
    BookingData: string;
    BookingId: string;
    TargetCurrency: string;
}
export interface BookFlightRequestBody {
    PassengerDetails: PassengerDetail[];
    BookingItemModels: BookingItemModel[];
}
export interface FlightBookingSummaryModel {
    PnrReferenceNumber: string;
    PnrDate: string;
    FlightSummaryModel: FlightSummaryModel;
    TravellerDetails: PassengerDetail[];
    PnrStatus: undefined;
    TicketStatus: undefined;
}
interface FlightBookingResult {
    FlightBookingSummaryModel: FlightBookingSummaryModel;
    IsFareLow: boolean;
    IsFareHigh: boolean;
    HasResult: boolean;
}
export interface BookFlightResponseBody extends ResponseHeaders {
    data: {
        BookingId: string;
        CustomerId: string;
        ProductType: string;
        TargetCurrency: string;
        ProductTermsAndConditions: undefined;
        FlightBookingResult: FlightBookingResult;
    };
}
export {};
