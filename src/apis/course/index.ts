import axios from "axios";
import { courseInfoMock, courseListMock } from "./mocks";
import { ShareCourseSchema } from "../../pages/Course/ShareCourse/schema";
import * as z from "zod";
import { ICourseMessageResponse } from "./types";
export type TShareCoursePlace = z.infer<typeof ShareCourseSchema>["place"];

export const getCourseInfo = async (tripId:string,roomId:string) => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 3000));
        return courseInfoMock;
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/vote/trip-info/tripId=${tripId}?roomId=${roomId}`);
        return response.data;
    }catch(error){
        console.error("CourseInfo API 호출 오류:", error);
        return courseInfoMock;
    }
}

export const getCourseList = async (tripId:string,roomId:string):Promise<ICourseMessageResponse> => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 5000));
        return courseListMock;
    }
    try{    
        const response = await axios.get<ICourseMessageResponse>(`${import.meta.env.VITE_API_URL}/api/rooms/${roomId}/places/${tripId}`);
        return response.data;
    }catch(error){
        console.error("CourseList API 호출 오류:", error);
        return courseListMock;
    }
}

export const postCoursePlace = async (place:TShareCoursePlace[], roomId:string) => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 3000));
        return courseInfoMock;
    }
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/rooms/${roomId}/places`,place);
    return response.data;
}

export const deleteCoursePlace = async (id:string, roomId:string) => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 3000));
        return courseInfoMock;
    }
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/rooms/${roomId}/places/${id}`);
    return response.data;
}

