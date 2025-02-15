import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../../apis/upcomingCourse";
import { FirstDayCourse } from "../../../apis/upcomingCourse/types";

export const useGetCourseInfo = (roomId: string, aiCourseId: string) => {
    console.log("📌 [useGetCourseInfo] 실행됨 - roomId:", roomId, "aiCourseId:", aiCourseId);

    const query = useQuery<FirstDayCourse | null>({
        queryKey: ["course", roomId, aiCourseId],
        queryFn: () => getCourse(roomId, aiCourseId),
        enabled: !!roomId && !!aiCourseId, // 🚨 enabled=false면 API 호출 안 됨
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    console.log("📌 [useGetCourseInfo] Query 데이터:", query.data); // Query 데이터 확인

    return query;
};
