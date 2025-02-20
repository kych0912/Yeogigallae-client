import { courseMock } from "./mocks";
import { CourseResponse, FirstDayCourse } from "./types";
import { api } from "../Axios";
import { sampleAiCourseResponse } from "../course/mocks";

export const getCourse = async (tripPlanId: string, aiCourseId: string): Promise<FirstDayCourse> => {
    try {
        const response = await api.get<CourseResponse>(`/api/aiCourse/tripPlan/${tripPlanId}/${aiCourseId}`);

        // return response.data.result || null;
        return sampleAiCourseResponse.result;
    } catch (error) {
        console.error("❌ [getCourse] API 호출 오류:", error);
        return courseMock.result || null;
    }
};
