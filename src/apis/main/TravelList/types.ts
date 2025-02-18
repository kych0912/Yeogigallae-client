export interface Room {
    tripPlanId: number;
    roomName: string;
    location: string;
    startDate: string;
    endDate: string;
    tripType: "DOMESTIC" | "INTERNATIONAL";
    imageUrl: string;
}

export interface TravelListResult {
    totalCount: number;
    trips: Room[];
}

export interface TravelListResponse {
    code: string;
    message: string;
    httpStatus: string;
    result: TravelListResult;
}
