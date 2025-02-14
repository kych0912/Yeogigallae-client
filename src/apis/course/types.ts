import { ChatMessage } from "../../pages/Course/ShareCourse/Share/_components/ChatInterface";
import { TShareCoursePlace } from "./index";

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

export interface ICoursePlaceResponse {
    httpStatus: string;
    code: string;
    message: string;
    result: (TShareCoursePlace&{id:string})[] ;
}

export interface ICourseMessageResponse {
    httpStatus: string;
    code: string;
    message: string;
    result: ChatMessage[];
}

