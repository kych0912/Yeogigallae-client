// POST 새로운 투표 생성
export interface TripPlanRequest {
  name: string;
  location: string;
  startDate: string;
  endData: string;
  tripType: string;
  voteLimitTime: string;
  minDays: number;
  maxDays: number;
  userId: number;
  roomId: number;
  scheduleDetails: {
    message: string;
    price: string;
  }
  courseDetails: {
    message: string;
  }
}

export interface TripPlanResponse {
  httpStatus: string;
  code: string;
  message: string;
  result: {
    id: number;
    name: string;
    location: string;
    description: string;
    startDate: string;
    endData: string;
    price: string;
    imageUrl: string;
    tripPlanType: string;
    tripType: string;
    voteLimitTime: string;
    minDays: number;
    maxDays: number;
    groupNmae: string;
  }
}

export interface TripPlanErrorResponse {
  timestamp: string;
  httpStatus: string;
  code: string;
  path: string;
  errorMessage: string;
}

// POST 투표 생성이미지 선택
export interface ImageSelectRequest {
  userId: number;
  imageUrl: string;
}

export interface ImageSelectResponse {
  httpStatus: string;
  code: string;
  message: string;
  result: string;
}

export interface ImageSelectErrorResponse {
  timestamp: string;
  httpStatus: string;
  code: string;
  path: string;
  errorMessage: string;
}

// GET 여행 계획 상세 조회
export interface TripPlanDetailResponse {
  httpStatus: string;
  code: string;
  message: string;
  result: {
    id: number;
    name: string;
    location: string;
    description: string;
    startDate: string;
    endDate: string;
    price: string;
    imageUrl: string;
    tripPlanType: string;
    tripType: string;
    voteLimitTime: string;
    minDays: number;
    maxDays: number;
    groupName: string;
  }
}


