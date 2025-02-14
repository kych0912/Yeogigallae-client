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

    const response = await axios.get(`/api/vote/trip-info/tripId=${tripId}?roomId=${roomId}`);
    return response.data;
}

export const getCourseList = async (tripId:string,roomId:string):Promise<ICourseMessageResponse> => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 5000));
        return courseListMock;
    }
    const response = await axios.get<ICourseMessageResponse>(`/api/rooms/${roomId}/places/${tripId}`);
    return response.data;
}

export const postCoursePlace = async (place:TShareCoursePlace[], roomId:string) => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 3000));
        return courseInfoMock;
    }
    const response = await axios.post(`/api/rooms/${roomId}/places`,place);
    return response.data;
}
