import { useQuery } from "@tanstack/react-query";
import { fetchTripPlanDetails } from "../../../apis/functional/tripDetailApi";
import { TripPlanDetailResponse } from "../../../types/functionalTypes/functionalTypes";

const DEFAULT_TRIP_PLAN_ID = 22; 

export const useTripPlanQuery = (tripPlanId: number | null) => {
  const validTripPlanId = tripPlanId && tripPlanId > 0 ? tripPlanId : DEFAULT_TRIP_PLAN_ID;

  return useQuery<TripPlanDetailResponse, Error>({
    queryKey: ["tripPlanDetails", validTripPlanId],
    queryFn: async () => fetchTripPlanDetails(validTripPlanId),
    retry: false, 
    gcTime: 500 * 60 * 10,
    enabled: true, 
  });
};
