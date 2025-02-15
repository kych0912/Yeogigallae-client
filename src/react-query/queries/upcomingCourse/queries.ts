import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../../apis/upcomingCourse";

export const useGetCourseInfo = (roomId: string, aiCourseId: string) => {
    return useQuery({
        queryKey: ["course", roomId, aiCourseId],
        queryFn: () => getCourse(roomId, aiCourseId),
        enabled: !!roomId && !!aiCourseId,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
    });
};
