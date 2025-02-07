import { TripInfoContext } from "./TripInfoContext";
import { useTripInfoQuery } from "../../../../react-query/queries/vote/useTripInfoQuery";

export const TripInfoProvider = ({ tripId, roomId, masterId, children }: { tripId: number; roomId: number; masterId: number; children: React.ReactNode }) => {
  const { data, isLoading, error } = useTripInfoQuery(tripId, roomId, masterId);

  return (
    <TripInfoContext.Provider value={{ tripId, roomId, masterId, tripInfo: data ?? null, isLoading, error }}>
      {children}
    </TripInfoContext.Provider>
  );
};
