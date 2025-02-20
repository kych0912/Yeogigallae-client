import { TripInfoContext } from "./TripInfoContext";
import { useTripInfoQuery } from "../../../../react-query/queries/vote/useTripInfoQuery";

interface TripInfoProviderProps {
  children: React.ReactNode;
  tripId: number;
  roomId: number;
}

export const TripInfoProvider = ({ children, tripId, roomId }: TripInfoProviderProps) => {
  const { data: tripInfo, isLoading, error } = useTripInfoQuery(tripId, roomId);

  if (isLoading) return <p>여행 정보를 불러오는 중...</p>;
  if (error) return <p>여행 정보를 불러오는 데 실패했습니다.</p>;

  return (
    <TripInfoContext.Provider
      value={{
        tripId,
        roomId,
        tripInfo: tripInfo ?? null,
        isLoading,
        error,
      }}
    >
      {children}
    </TripInfoContext.Provider>
  );
};
