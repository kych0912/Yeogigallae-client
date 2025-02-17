import { courseInfoMock, courseListMock } from "./mocks";
import { ShareCourseSchema } from "../../pages/Course/ShareCourse/schema";
import * as z from "zod";
import { ICourseMessageResponse } from "./types";
import { api } from "../Axios";

//장소 정보 타입
export type TShareCoursePlace = z.infer<typeof ShareCourseSchema>["place"];

//공유 코스 정보 타입 (description, imageUrl)
export type TShareCourseInfo = Omit<z.infer<typeof ShareCourseSchema>,"place">;

//공유 코스 장소 정보 타입 (description, imageUrl, place)
export type TShareCoursePlacesInfo = (
    TShareCourseInfo & 
    TShareCoursePlace & {
    userId:string;
});

export const getCourseInfo = async (tripId:string,roomId:string) => {
    try{
        const response = await api.get(`/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}`);
        return response.data;
    }catch(error){
        console.error("CourseInfo API 호출 오류:", error);
        return courseInfoMock;
    }
}

// 공유된 코스 목록 조회
export const getCourseList = async (tripId:string):Promise<ICourseMessageResponse> => {
    try{    
        const response = await api.get<ICourseMessageResponse>(`/api/trip-plans/${tripId}/places`);
        return response.data;
    }catch(error){
        console.error("CourseList API 호출 오류:", error);
        return courseListMock;
    }
}

// 공유된 코스 장소 추가
export const postCoursePlace = async (placeCardInfo:TShareCoursePlacesInfo[], tripId:string) => {
    try{
        const response = await api.post(`/api/trip-plans/${tripId}/places`,placeCardInfo);
        return response.data;
    }catch(error){
        console.error("CoursePlace API 호출 오류:", error);
        return null;
    }
}

// 공유된 코스 장소 삭제
export const deleteCoursePlace = async (id:string, tripId:string) => {
    try{
        const response = await api.delete(`/api/trip-plans/${tripId}/places/${id}`);
        return response.data;
    }catch(error){
        console.error("CoursePlace API 호출 오류:", error);
        return null;
    }
}

