import {
  FlightCombination
} from './FlightDetailTypes';

interface Itineraries {
  Departure: string;
  Destination: string;
  DepartureDate: string;
}

type FlightSearchType = 'oneway' | 'return' | 'multidestination'

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
