import axios from "axios";
import { ImageSelectRequest, ImageSelectResponse } from "../../types/functionalTypes/functionalTypes";
import { mockImageSelectResponse } from "../../mocks/imageMock";

const API_BASE_URL = import.meta.env.VITE_API_URL; // ✅ .env에서 API URL 가져오기

export const postSelectedImage = async (data: ImageSelectRequest): Promise<ImageSelectResponse> => {
  try {
    const url = `${API_BASE_URL}/images/select?userId=${data.userId}&imageUrl=${data.imageUrl}`;

    // // 실제 API 요청 (현재 주석 처리)
    // const response = await axios.post(url);
    // return response.data;

    console.warn("API 요청 URL:", url); // ✅ API URL 확인용 로그
    console.warn("목데이터 반환");
    return mockImageSelectResponse;
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
};
