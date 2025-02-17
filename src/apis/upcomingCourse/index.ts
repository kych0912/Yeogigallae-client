import { courseMock } from "./mocks";
import { CourseResponse, FirstDayCourse } from "./types";
import { api } from "../Axios";

export const getCourse = async (roomId: string, aiCourseId: string): Promise<FirstDayCourse | null> => {
    console.log("📌 [getCourse] 함수 실행됨 - roomId:", roomId, "aiCourseId:", aiCourseId);

    if (import.meta.env.MODE === "development") {
        console.log("📌 [getCourse] 개발 환경 - 목업 데이터 반환:", courseMock.result);
        return courseMock.result || null;
    }

    try {
        const response = await api.get<CourseResponse>(`/api/ai-course/room/${roomId}/${aiCourseId}`);

        console.log("✅ [getCourse] API 응답 데이터:", response.data.result); // API 데이터 확인
        return response.data.result || null;
    } catch (error) {
        console.error("❌ [getCourse] API 호출 오류:", error);
        return courseMock.result || null;
    }
};
