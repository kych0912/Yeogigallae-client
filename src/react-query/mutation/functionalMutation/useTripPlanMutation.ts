import { useMutation } from "@tanstack/react-query";
import { createTripPlan } from "../../../apis/functional/tripPlanApi";
import { TripPlanRequest, TripPlanResponse } from "../../../types/functionalTypes/functionalTypes";
import { useTripPlanStore } from "../../../store/functionalStore/useTripPlanStore";

export const useTripPlanMutation = () => {
  const { setTripPlan } = useTripPlanStore();

  return useMutation<TripPlanResponse, Error, { tripPlanType: string; data: TripPlanRequest }>({
    mutationFn: ({ tripPlanType, data }) => createTripPlan(tripPlanType, data),
    onSuccess: (data) => {
      console.log("POST 성공:", data);
      setTripPlan(data); 
    },
    onError: (error) => {
      console.error(error);
      alert("여행 계획 생성에 실패했습니다.");
    },
  });
};
