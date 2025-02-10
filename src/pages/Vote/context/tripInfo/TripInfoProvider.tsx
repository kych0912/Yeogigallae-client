import { TripInfoContext } from "./TripInfoContext";
import { useTripInfoQuery } from "../../../../react-query/queries/vote/useTripInfoQuery";

export const TripInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useTripInfoQuery(2001, 999, 1);

  if (isLoading) return <p>Loading Trip Data...</p>;
  if (error) return <p>Error loading trip data</p>;

  return (
    <TripInfoContext.Provider value={{ 
      tripId: data?.tripId ?? null, 
      roomId: data?.roomId ?? null, 
      masterId: data?.masterId ?? null, 
      tripInfo: data ?? null,  
      isLoading, 
      error 
    }}>
      {children}
    </TripInfoContext.Provider>
  );
};
