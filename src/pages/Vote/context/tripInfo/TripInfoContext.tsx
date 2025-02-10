import { createContext } from "react";
import { TripInfo } from "./tripInfoSchema";
import { TripInfoProvider } from "./TripInfoProvider"; 

interface TripInfoContextType {
  tripId: number | null;
  roomId: number | null;
  masterId: number | null;
  tripInfo: TripInfo | null;
  isLoading: boolean;
  error: Error | null;
}

export const TripInfoContext = createContext<TripInfoContextType | undefined>(undefined);

export { TripInfoProvider };
