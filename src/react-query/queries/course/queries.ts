import { useQuery } from "@tanstack/react-query";
import { getCourseInfo } from "../../../apis/course";
import { ICourseInfo } from "../../../apis/course/types";

export const useGetCourseInfo = (tripId:string,roomId:string) => {
    return useQuery<ICourseInfo>({
        queryKey:["course",tripId,roomId],
        queryFn:() => getCourseInfo(tripId,roomId),
        enabled:!!tripId && !!roomId,
        retry:false,
        refetchOnWindowFocus:false,
        refetchOnMount:false,
        refetchOnReconnect:false,
        refetchInterval:false,
        refetchIntervalInBackground:false,
    })
}