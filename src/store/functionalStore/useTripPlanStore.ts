import { create } from "zustand";
import { TripPlanResponse } from "../../types/functionalTypes/functionalTypes";

interface TripPlanState {
  tripPlan: TripPlanResponse | null;
  setTripPlan: (tripPlan: TripPlanResponse) => void;
}

export const useTripPlanStore = create<TripPlanState>((set) => ({
  tripPlan: null,
  setTripPlan: (tripPlan) => set({ tripPlan }),
}));
