import axios from "axios";
import { courseMock } from "./mocks";
import { CourseResponse } from "./types";

export const getCourse = async (roomId: string, aiCourseId: string): Promise<CourseResponse> => {
    if (import.meta.env.MODE === "development") {
        return courseMock;
    }

    try {
        const response = await axios.get<CourseResponse>(`${import.meta.env.VITE_API_URL}/api/ai-course/room/${roomId}/${aiCourseId}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("코스 정보 API 호출 오류:", error);
        return courseMock;
    }
};
