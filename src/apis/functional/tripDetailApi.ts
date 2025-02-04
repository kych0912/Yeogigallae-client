import axios from "axios";
import { TripPlanDetailResponse } from "../../types/functionalTypes/functionalTypes";

const API_BASE_URL = import.meta.env.VITE_API_URL; 

export const fetchTripPlanDetails = async (tripPlanId: number): Promise<TripPlanDetailResponse> => {
  try {
    const url = `${API_BASE_URL}/trip-plan/${tripPlanId}/details`;

    const response = await axios.get(url);
    return response.data;

  } catch (error) {
    console.error("GET", error);
    throw error;
  }
};
