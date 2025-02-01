import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchTripPlanDetails } from "../../../apis/functional/tripDetailApi";
import { TripPlanDetailResponse } from "../../../types/functionalTypes/functionalTypes";
import { mockTripPlanDetailResponse } from "../../../mocks/tripDetailMock";

const tripDetailQueryOptions = (tripPlanId: number): UseQueryOptions<TripPlanDetailResponse, Error> => ({
  queryKey: ["tripPlanDetails", tripPlanId], 
  queryFn: () => fetchTripPlanDetails(tripPlanId),
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10, 
  enabled: !!tripPlanId,
  placeholderData: mockTripPlanDetailResponse,
});

export const useTripPlanQuery = (tripPlanId: number) => {
  return useQuery(tripDetailQueryOptions(tripPlanId));
};
