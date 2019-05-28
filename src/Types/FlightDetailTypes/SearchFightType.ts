import {
  FlightCombination,
} from "./FlightDetailTypes";

interface Itineraries {
  [key: string]: string;
}

type FlightSearchType = "Oneway" | "Return" | "Multidestination";

export interface FlightSearchRequestBody {
  FlightSearchType: FlightSearchType;
  Ticketclass: string;
  Adults: number;
  Children: number;
  Infants: number;
  Itineraries: Itineraries[];
  TargetCurrency: string;
}

export interface FlightSearchResponseBody {
  FlightCombination: FlightCombination;
  SelectData: string;
}
