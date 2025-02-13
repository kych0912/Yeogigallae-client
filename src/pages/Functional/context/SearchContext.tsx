import { createContext, useContext, useState, ReactNode } from "react";
import { KakaoPlaceDocument } from "../../../apis/searchAddress/types";

interface SearchPlace {
  place_name: string;
  x: string;
  y: string;
}

interface SearchContextType {
  selectedPlace: SearchPlace | null;
  setSelectedPlace: (place: SearchPlace) => void;
  places: KakaoPlaceDocument[]; 
  setPlaces: (places: KakaoPlaceDocument[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [selectedPlace, setSelectedPlace] = useState<SearchPlace | null>(null);
  const [places, setPlaces] = useState<KakaoPlaceDocument[]>([]); 

  return (
    <SearchContext.Provider value={{ selectedPlace, setSelectedPlace, places, setPlaces }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
