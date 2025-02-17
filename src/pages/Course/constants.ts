import { ShareCourseData } from "./ShareCourse/share.types";
import { ShareCourseListSchema } from "./ShareCourse/schema";
import { z } from "zod";


export const DefaultPlace:ShareCourseData[number] = {
    imageUrl: "",
    place: {
        address: "",
        placeName: "",
        latitude: "",
        longitude: "",
    },
    description: "",
}

export const FormDataSchema = z.object({
    places: ShareCourseListSchema
})
