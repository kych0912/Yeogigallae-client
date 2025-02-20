export type Room = {
    tripPlanId: number;
    roomId: number;
    roomName: string;
    aiCourseId: number;
    location: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET";
};

export type UpcomingResult = {
    totalCount: number;
    rooms: Room[];
};

export interface UpcomingResponse {
    code: number;
    message: string;
    httpStatus: string;
    result: UpcomingResult;
}
