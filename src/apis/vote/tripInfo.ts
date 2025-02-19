import { TripInfoSchema } from "../../pages/Vote/context/tripInfo/tripInfoSchema";
import { api } from "../Axios";

export const getTripInfo = async (tripId: number, roomId: number) => {
  try {
    const response = await api.get(`/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}`);
    console.log("📌 서버 응답:", response.data);  // ✅ 서버 응답 확인
    
    return TripInfoSchema.parse(response.data);  // ✅ Zod 검증
  } catch (error) {
    console.error("❌ GET 요청 실패:", error);
    throw error;  // 에러 전파
  }
};
