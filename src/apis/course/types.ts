import { TPlace } from "../../pages/Course/ShareCourse/share.types";
import { TShareCoursePlace } from "./index";
import { VoteLimitTimeMap } from "../../pages/Course/ShareCourse/Share/constants";
export type TVoteLimitTime = keyof typeof VoteLimitTimeMap;

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
    voteLimitTime: TVoteLimitTime;
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
    result: {
        places:TPlace[];
    }
}

export type TAiCoursePlace = {
    id:number;
    placeName:string;
    address:string;
    latitude:number;
    longitude:number;
    image:string;
    description:string;
    userName:string;
    profileImage:string;
}

export type TAiCourseDailyItinerary = {
    day:string;
    places:TAiCoursePlace[] | [];
}

export type TAiCourse = {
    roomName:string;
    totalRoomMember:number;
    startDate:string;
    dailyItineraries:TAiCourseDailyItinerary[];
}

export interface IAiCourseResponse {
    httpStatus: string;
    code: string;
    message: string;
    result: TAiCourse;
}

export type TAiCourseId = {
    aiCourseId:string;
}

export interface IAiCourseIdResponse {
    httpStatus: string;
    code: string;
    message: string;
    result: TAiCourseId[];
}


