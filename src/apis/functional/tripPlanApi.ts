import axios from "axios";
import { TripPlanRequest, TripPlanResponse } from "../../types/functionalTypes/functionalTypes";
import { mockTripPlanResponse } from "../../mocks/tripPlanMock";

const API_BASE_URL = import.meta.env.VITE_API_URL; // ✅ .env에서 API URL 가져오기

export const createTripPlan = async (tripPlanType: string, data: TripPlanRequest): Promise<TripPlanResponse> => {
  try {
    const url = `${API_BASE_URL}/trip-plan/votes/${tripPlanType}`;

    const response = await axios.post(url, data);
    return response.data;

    console.warn("API 요청 URL:", url); // ✅ API 요청 URL 확인용 로그
    console.warn("목데이터 반환");
    return mockTripPlanResponse;
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
};


// export const createTripPlan = async (tripPlanType: string, data: TripPlanRequest): Promise<TripPlanResponse> => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/${tripPlanType}`, data);
//     return response.data;
//   } catch (error) {
//     console.warn("서버 에러 발생, 목데이터 반환");
//     return {
//       httpStatus: "OK",
//       code: "COMMON_200",
//       message: "성공적으로 처리되었습니다.",
//       result: {
//         id: 22,
//         name: data.name,
//         location: data.location,
//         description: data.scheduleDetails.message,
//         startDate: data.startDate,
//         endData: data.endData,
//         price: data.scheduleDetails.price,
//         imageUrl: "https://example.com/images/1.jpg",
//         tripPlanType,
//         tripType: data.tripType,
//         voteLimitTime: data.voteLimitTime,
//         minDays: data.minDays,
//         maxDays: data.maxDays,
//         groupNmae: "hi"
//       }
//     };
//   }
// };
