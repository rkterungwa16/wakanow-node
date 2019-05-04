import {
  PassengerDetail,
  FlightSummaryModel
} from './FlightDetailTypes'

interface BookingItemModel {
  ProductType: string;
  BookingData: string;
  BookingId: string;
  TargetCurrency: string;
}

export interface BookFlightRequestBody {
  PassengerDetails: PassengerDetail[];
  BookingItemModels: BookingItemModel[]
}

// interface TravellerDetail {
//   PassengerType: string;
//   FirstName: string;
//   MiddleName: string;
//   LastName: string;
//   DateOfBirth: string;
//   Age: null;
//   PhoneNumber: string;
//   PassportNumber: string;
//   ExpiryDate: null;
//   PassportIssuingAuthority: string;
//   Gender: string;
//   Title: string;
//   Email: string;
//   Address: string;
//   Country: string;
//   CountryCode: string;
//   City: string;
//   PostalCode: string;
//   TicketNumber: null;
//   RoomNumber: null;
// }

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
