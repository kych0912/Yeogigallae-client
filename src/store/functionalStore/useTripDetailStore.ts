import { create } from "zustand";
import { TripPlanDetailResponse } from "../../types/functionalTypes/functionalTypes";

interface TripDetailState {
  tripPlanDetails: TripPlanDetailResponse | null;
  setTripPlanDetails: (tripPlan: TripPlanDetailResponse | null) => void;
}

export const useTripDetailStore = create<TripDetailState>((set) => ({
  tripPlanDetails: null, 
  setTripPlanDetails: (tripPlan) => set({ tripPlanDetails: tripPlan }),
}));
