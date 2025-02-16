import { api } from "../Axios";
import { courseData } from "./mocks";

export const getCourse = async (roomId: unknown, aiCourseId: unknown) => {
    if (import.meta.env.MODE === "development") {
        return courseData;
    }

    const response = await api.get(`/api/ai-course/room/${roomId}/${aiCourseId}`);

    return response.data.result;
};
