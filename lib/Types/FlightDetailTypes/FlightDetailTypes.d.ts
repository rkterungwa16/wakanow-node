export interface PassengerDetail {
    PassengerType?: string;
    FirstName?: string;
    LastName?: string;
    MiddleName?: string;
    DateOfBirth?: string;
    Age?: number;
    PhoneNumber?: string;
    PassportNumber?: string;
    ExpiryDate?: string;
    PassportIssuingAuthority?: string;
    Gender?: string;
    Title?: string;
    Email?: string;
    Address?: string;
    Country?: string;
    CountryCode?: string;
    City?: string;
    PostalCode?: string;
    TicketNumber?: string;
    RoomNumber?: string;
}
export interface FlightLeg {
    DepartureCode: string;
    DepartureName: string;
    DestinationCode: string;
    DestinationName: string;
    StartTime: string;
    EndTime: string;
    Duration: string;
    IsStop: boolean;
    Layover: string;
    LayoverDuration: string;
    BookingClass: string;
    CabinClass: string;
    OperatingCarrier: string;
    OperatingCarrierName: string;
    MarketingCarrier: string;
    FlightNumber: string;
    Aircraft: string;
    FareType: string;
    FarebasisCode: string;
    CorporateCode: string;
    FlightSelectData: undefined;
}
export interface Flight {
    Name: string;
    Airline: string;
    AirlineName: string;
    DepartureCode: string;
    DepartureTime: string;
    ArrivalName: string;
    ArrivalCode: string;
    ArrivalTime: string;
    Stops: number;
    StopTime: string;
    TripDuration: string;
    StopCity: undefined;
    AirlineLogoUrl: string;
    FlightLegs: FlightLeg[];
}
export interface PriceDetail {
    BaseFare: {
        Amount: number;
        CurrencyCode: string;
    };
    Tax: {
        Amount: number;
        CurrencyCode: string;
    };
    PassengerType: string;
}
export interface FlightCombination {
    FlightModels: Flight[];
    Price: {
        Amount: number;
        CurrencyCode: string;
    };
    MarketingCarrier: string;
    Adults: number;
    Children: number;
    Infants: number;
    PriceDetails: PriceDetail[];
    FareRules: string[];
    PenaltyRules: string;
    AirlineCode: string;
    IsRefundable: boolean;
    IncludePaySmallSmall: boolean;
    DownPaymentDetailInPercentage: number;
    PaySmallSmallLockDownPrice: number;
}
export interface FlightSummaryModel {
    FlightCombination: FlightCombination;
}
export interface ErrorMessage {
    Message: string;
}
