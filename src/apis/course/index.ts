import axios from "axios";
import { courseInfoMock, courseListMock } from "./mocks";
import { ShareCourseSchema } from "../../pages/Course/ShareCourse/schema";
import * as z from "zod";
import { ICourseMessageResponse } from "./types";
export type TShareCoursePlace = z.infer<typeof ShareCourseSchema>["place"];


export const getCourseInfo = async (tripId:string,roomId:string) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/vote/trip-info?tripId=${tripId}&roomId=${roomId}`,
            {
                withCredentials:true,
            }   
        );
        return response.data;
    }catch(error){
        console.error("CourseInfo API 호출 오류:", error);
        return courseInfoMock;
    }
}

// 공유된 코스 목록 조회
export const getCourseList = async (tripId:string,roomId:string):Promise<ICourseMessageResponse> => {
    try{    
        const response = await axios.get<ICourseMessageResponse>(`${import.meta.env.VITE_API_URL}/api/room/${roomId}/places/${tripId}`,{
            withCredentials:true,
        });
        return response.data;
    }catch(error){
        console.error("CourseList API 호출 오류:", error);
        return courseListMock;
    }
}

// 공유된 코스 장소 추가
export const postCoursePlace = async (place:TShareCoursePlace[], roomId:string) => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/room/${roomId}/places`,place,{
            withCredentials:true,
        });
        return response.data;
    }catch(error){
        console.error("CoursePlace API 호출 오류:", error);
        return null;
    }
}

export const deleteCoursePlace = async (id:string, roomId:string) => {
    try{
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/rooms/${roomId}/places/${id}`,{
            withCredentials:true,
        });
        return response.data;
    }catch(error){
        console.error("CoursePlace API 호출 오류:", error);
        return null;
    }
}

