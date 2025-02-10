import { TripPlanRequest, TripPlanResponse } from "../types/functionalTypes/functionalTypes";

// TripPlanRequest 목데이터 (POST 요청에 사용)
export const mockTripPlanRequest: TripPlanRequest = {
  name: "제주도 여행",
  location: "제주도",
  startDate: "2025-02-01",
  endData: "2025-02-07",
  tripType: "DOMESTIC",
  voteLimitTime: "THIRTY_MINUTES",
  minDays: 3,
  maxDays: 7,
  userId: 1,
  roomId: 1,
  scheduleDetails: {
    message: "자세한 일정은 추후 확정 예정",
    price: "50만원 예상",
  },
  courseDetails: {
    message: "관광 명소 방문 위주로 진행 예정",
  },
};

// TripPlanResponse 목데이터 (API 응답에 사용)
export const mockTripPlanResponse: TripPlanResponse = {
  httpStatus: "OK",
  code: "COMMON_200",
  message: "성공적으로 처리되었습니다.",
  result: {
    id: 22,
    name: mockTripPlanRequest.name,
    location: mockTripPlanRequest.location,
    description: mockTripPlanRequest.courseDetails.message,
    startDate: mockTripPlanRequest.startDate,
    endData: mockTripPlanRequest.endData,
    price: mockTripPlanRequest.scheduleDetails.price,
    imageUrl: "https://example.com/images/1.jpg",
    tripPlanType: "COURSE",
    tripType: mockTripPlanRequest.tripType,
    voteLimitTime: mockTripPlanRequest.voteLimitTime,
    minDays: mockTripPlanRequest.minDays,
    maxDays: mockTripPlanRequest.maxDays,
    groupNmae: "hi",
  },
};
