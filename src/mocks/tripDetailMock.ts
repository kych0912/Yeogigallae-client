import { TripPlanDetailResponse } from "../types/functionalTypes/functionalTypes";

export const mockTripPlanDetailResponse: TripPlanDetailResponse = {
  httpStatus: "OK",
  code: "COMMON_200",
  message: "성공적으로 처리되었습니다.",
  result: {
    id: 22,
    name: "오락실 여행",
    location: "서울시",
    description: "좋은 명소 위주로 진행 예정",
    startDate: "2025-12-11",
    endData: "2025-12-16",
    price: "20만원", 
    imageUrl: "https://example.com/images/1.jpg",
    tripPlanType: "COURSE",
    tripType: "DOMESTIC",
    voteLimitTime: "THIRTY_MINUTES",
    minDays: 3,
    maxDays: 5,
    groupNmae: "hi",
  },
};
