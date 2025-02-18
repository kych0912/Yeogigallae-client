import { courseInfoMock, courseListMock, sampleAiCourseResponse } from "./mocks";
import { ShareCourseSchema } from "../../pages/Course/ShareCourse/schema";
import * as z from "zod";
import { IAiCourseIdResponse, ICourseMessageResponse, IAiCourseResponse } from "./types";
import { api } from "../Axios";
import { Route } from "../map/types";
import { AiCourseToKaKaoCourse } from "../../Utils/AiCourseToKaKaoCourse";

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

export const getAiCourseId = async (tripId:string):Promise<IAiCourseIdResponse["result"]> => {
    try{
        const response = await api.get<IAiCourseIdResponse>(`/api/aiCourse/tripPlan/${tripId}/ids`);
        return response.data.result;
    }catch(error){
        console.error("AiCourseId API 호출 오류:", error);
        return [];
    }
}

export const generateAiCourse = async (tripId:string) => {
    const response = await api.post(`/api/aiCourse/tripPlan/${tripId}`);
    return response.data.result;
}

export const getAiCourse = async (tripId:string,aiCourseId:string):Promise<IAiCourseResponse> => {
    const response = await api.get(`/api/aiCourse/tripPlan/${tripId}/${aiCourseId}`);
    return response.data;  
}


/**
 * aiCourseId가 존재하는지 확인
 * 확인 후 존재하면 해당 코스를 KaKao Route로 변환
 * 없을 경우 새로운 aiCourseId를 생성
 * aiCourseId를 생성 후 해당 코스를 KaKao Route로 변환
 * @param tripId 여행 계획 ID
 * @returns aiCourseId와 aiKaKaoCourse
 */
export const getAiKaKaoCourseAndId = async (tripId:string):Promise<{aiCourseId:string, aiKaKaoCourse:Route[]}> => {
    const aiCourseIdArray = await getAiCourseId(tripId);

    if(aiCourseIdArray.length !== 0 ){
        const aiCourseId = aiCourseIdArray[aiCourseIdArray.length - 1].aiCourseId;
        const aiCourse = await getAiCourse(tripId, aiCourseId);
        
        const aiKaKaoCourse = await AiCourseToKaKaoCourse(aiCourse);

        return { aiCourseId, aiKaKaoCourse };
    }

    const aiCourseId = await generateAiCourse(tripId);
    const aiCourse = await getAiCourse(tripId, aiCourseId);

    const aiKaKaoCourse = await AiCourseToKaKaoCourse(aiCourse);

    return { aiCourseId, aiKaKaoCourse };
}


