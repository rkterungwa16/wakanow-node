import { FlightCombination } from "./FlightDetailTypes";
import { ResponseHeaders } from "../";
interface Itineraries {
    [key: string]: string;
}
declare type FlightSearchType = "Oneway" | "Return" | "Multidestination";
export interface FlightSearchRequestBody {
    FlightSearchType: FlightSearchType;
    Ticketclass: string;
    Adults: number;
    Children: number;
    Infants: number;
    Itineraries: Itineraries[];
    TargetCurrency: string;
}
export interface FlightSearchResponseBody extends ResponseHeaders {
    data: {
        FlightCombination: FlightCombination;
        SelectData: string;
    }[];
}
export {};
