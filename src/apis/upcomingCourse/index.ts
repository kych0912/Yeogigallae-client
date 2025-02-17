import { courseMock } from "./mocks";
import { CourseResponse, FirstDayCourse } from "./types";
import { api } from "../Axios";

export const getCourse = async (tripPlanId: string, aiCourseId: string): Promise<FirstDayCourse> => {
    try {
        const response = await api.get<CourseResponse>(`/api/aiCourse/tripPlan/${tripPlanId}/${aiCourseId}`);

        console.log("✅ [getCourse] API 응답 데이터:", response.data.result); // API 데이터 확인
        return response.data.result || null;
    } catch (error) {
        console.error("❌ [getCourse] API 호출 오류:", error);
        return courseMock.result || null;
    }
};
