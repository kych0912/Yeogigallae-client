import axios from "axios";
import { courseData } from "./mocks";

export const getCourse = async (roomId: unknown, aiCourseId: unknown) => {
    if (import.meta.env.MODE === "development") {
        return courseData;
    }

    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/ai-course/room/${roomId}/${aiCourseId}`, {
        withCredentials: true,
    });

    return response.data.result;
};
