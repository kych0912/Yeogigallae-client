import axios from "axios";
import { courseInfoMock } from "./mocks";

export const getCourseInfo = async (tripId:string,roomId:string) => {
    if(import.meta.env.MODE === "development"){
        await new Promise(resolve => setTimeout(resolve, 3000));
        return courseInfoMock;
    }

    const response = await axios.get(`/api/vote/trip-info/tripId=${tripId}?roomId=${roomId}`);
    return response.data;
}
