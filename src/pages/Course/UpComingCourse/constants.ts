import { ShareCourseData } from "./ShareCourse/ShareCorsePage";
import { ShareCourseListSchema } from "./ShareCourse/schema";
import { z } from "zod";


export const DefaultPlace:ShareCourseData[number] = {
    image: "",
    place: {
        address: "",
        placeName: "",
        lat: "",
        lng: "",
    },
    description: "",
}

export const FormDataSchema = z.object({
    places: ShareCourseListSchema
})
