export interface TripPlanResponse {
  httpStatus: string;
  code: string;
  message: string;
  result: TripPlanResult;
}

export interface TripPlanResult {
  id: number;
  roomId: number;
  masterId: number;
  location: string;
  description: string;
  startDate: string; 
  endDate: string; 
  price: string | null; 
  imageUrl: string;
  tripPlanType: "COURSE" | "SCHEDULE";
  tripType: "DOMESTIC" | "OVERSEAS";
  voteLimitTime: "THIRTY_MINUTES" | "SIXTY_MINUTES" | "TWO_HOURS"; 
  roomName: string;
  latitude: number;
  longitude: number;
}
