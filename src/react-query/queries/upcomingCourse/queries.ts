import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../../apis/upcomingCourse";
import { CourseResponse } from "../../../apis/upcomingCourse/types";

export const useGetCourseInfo = (roomId: string, aiCourseId: string) => {
    return useQuery<CourseResponse>({
        queryKey: ["course", roomId, aiCourseId],
        queryFn: () => getCourse(roomId, aiCourseId),
        enabled: !!roomId && !!aiCourseId,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
};
