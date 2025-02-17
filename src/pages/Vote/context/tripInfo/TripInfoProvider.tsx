import { TripInfoContext } from "./TripInfoContext";
import { useTripInfoQuery } from "../../../../react-query/queries/vote/useTripInfoQuery";

interface TripInfoProviderProps {
  children: React.ReactNode;
  tripId: number;
  roomId: number;
}

export const TripInfoProvider = ({ children, tripId, roomId }: TripInfoProviderProps) => {
  const { data, isLoading, error } = useTripInfoQuery(tripId, roomId);

  if (isLoading) return <p>Loading Trip Data...</p>;
  if (error) return <p>Error loading trip data</p>;

  return (
    <TripInfoContext.Provider value={{ 
      tripId, 
      roomId, 
      tripInfo: data ?? null,  
      isLoading, 
      error 
    }}>
      {children}
    </TripInfoContext.Provider>
  );
};
