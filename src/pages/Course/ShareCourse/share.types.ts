import * as z from "zod";
import { ShareCourseListSchema } from "./schema";

export type ShareCourseData = z.infer<typeof ShareCourseListSchema>;

export type TListFormData = {
    places: ShareCourseData
}

export interface TPlace {
    id:string;
    placeName:string;
    address:string;
    latitude:number;
    longitude:number;
    image:string;
    description:string;
    userName:string;
    profileImage:string;
}