import { createContext, useContext, useState, ReactNode } from "react";
import { KakaoPlaceDocument } from "../../../apis/searchAddress/types";

interface SearchContextType {
    results: KakaoPlaceDocument[];
    centerCoords: { x: string; y: string } | null;
    selectedPlace: KakaoPlaceDocument | null;
    currentPage: number;
    totalPages: number;
    setResults: (results: KakaoPlaceDocument[]) => void;
    setCenterCoords: (coords: { x: string; y: string }) => void;
    selectPlace: (place: KakaoPlaceDocument) => void;
    setCurrentPage: (page: number) => void;
    setTotalPages: (pages: number) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [results, setResults] = useState<KakaoPlaceDocument[]>([]);
    const [centerCoords, setCenterCoords] = useState<{ x: string; y: string } | null>(null);
    const [selectedPlace, setSelectedPlace] = useState<KakaoPlaceDocument | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const selectPlace = (place: KakaoPlaceDocument) => {
        setSelectedPlace(place);
        setCenterCoords({ x: place.x.toString(), y: place.y.toString() });
    };

    return (
        <SearchContext.Provider
            value={{
                results,
                centerCoords,
                selectedPlace,
                currentPage,
                totalPages,
                setResults,
                setCenterCoords,
                selectPlace,
                setCurrentPage,
                setTotalPages,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
}
