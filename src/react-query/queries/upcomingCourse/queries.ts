import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../../apis/upcomingCourse";
import { FirstDayCourse } from "../../../apis/upcomingCourse/types";

export const useGetCourseInfo = (tripPlanId: string, aiCourseId: string) => {
    const query = useQuery<FirstDayCourse>({
        queryKey: ["course", tripPlanId, aiCourseId],
        queryFn: () => getCourse(tripPlanId, aiCourseId),
        enabled: !!tripPlanId && !!aiCourseId,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
    return query;
};
