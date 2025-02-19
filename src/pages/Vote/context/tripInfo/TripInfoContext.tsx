import { createContext } from "react";
import { z } from "zod"; 
import { TripInfoSchema } from "./tripInfoSchema";
import { TripInfoProvider } from "./TripInfoProvider";

export type TripInfoResponse = z.infer<typeof TripInfoSchema>["result"];

interface TripInfoContextType {
  tripId: number | null;
  roomId: number | null;
  tripInfo: TripInfoResponse | null;  
  isLoading: boolean;
  error: Error | null;
}

export const TripInfoContext = createContext<TripInfoContextType | undefined>(undefined);

export { TripInfoProvider };
