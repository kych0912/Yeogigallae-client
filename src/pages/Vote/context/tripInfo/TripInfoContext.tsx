import { createContext, useContext } from "react";
import { TripInfo } from "./tripInfoSchema";

interface TripInfoContextType {
  tripId: number;
  roomId: number;
  masterId: number;
  tripInfo: TripInfo | null;
  isLoading: boolean;
  error: Error | null;
}

export const TripInfoContext = createContext<TripInfoContextType | undefined>(undefined);

export const useTripInfoContext = () => {
  const context = useContext(TripInfoContext);
  if (!context) {
    throw new Error("useTripInfoContext must be used within a TripInfoProvider");
  }
  return context;
};
