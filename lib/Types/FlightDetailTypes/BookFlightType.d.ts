import { PassengerDetail, FlightSummaryModel } from './FlightDetailTypes';
export interface BookingItemModel {
    ProductType: string;
    BookingData: string;
    BookingId: string;
    TargetCurrency: string;
}
export interface BookFlightRequestBody {
    PassengerDetails: PassengerDetail[];
    BookingItemModels: BookingItemModel[];
    BookingId: string;
}
export interface FlightBookingSummaryModel {
    PnrReferenceNumber: string;
    PnrDate: string;
    FlightSummaryModel: FlightSummaryModel;
    TravellerDetails: PassengerDetail[];
    PnrStatus: null;
    TicketStatus: null;
}
interface FlightBookingResult {
    FlightBookingSummaryModel: FlightBookingSummaryModel;
    IsFareLow: boolean;
    IsFareHigh: boolean;
    HasResult: boolean;
}
export interface BookFlightResponseBody {
    BookingId: string;
    CustomerId: string;
    ProductType: string;
    TargetCurrency: string;
    ProductTermsAndConditions: null;
    FlightBookingResult: FlightBookingResult;
}
export {};
