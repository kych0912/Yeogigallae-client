export type TCourseResult = {
    location: string;
    description: string;
    imageUrl: string;
    customLocation: string;
    price: string;
    minDays: number;
    maxDays: number;
    month: number;
    roomName: string;
    userCount: number;
    userName: string;
    masterName: string;
    voteLimitTime: string;
    startDate: string;
    endDate: string;
}

export interface ICourseInfo {
    httpStatus: string;
    code: string;
    message: string;
    result: TCourseResult;
}
