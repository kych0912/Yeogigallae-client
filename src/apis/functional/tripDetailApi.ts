import axios from "axios";
import { TripPlanDetailResponse } from "../../types/functionalTypes/functionalTypes";
import { mockTripPlanDetailResponse } from "../../mocks/tripDetailMock";

const API_BASE_URL = import.meta.env.VITE_API_URL; // ✅ .env에서 API URL 가져오기

export const fetchTripPlanDetails = async (tripPlanId: number): Promise<TripPlanDetailResponse> => {
  try {
    const url = `${API_BASE_URL}/trip-plan/${tripPlanId}/details`;

    const response = await axios.get(url);
    return response.data;

    console.warn("API 요청 URL:", url); // ✅ API 요청 URL 확인용 로그
    console.warn("목데이터 반환");
    return mockTripPlanDetailResponse;
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
};
