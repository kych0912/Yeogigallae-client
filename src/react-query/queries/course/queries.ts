import { useQuery } from "@tanstack/react-query";
import { getCourseInfo, getCourseList } from "../../../apis/course";
import { ICourseInfo, ICourseMessageResponse } from "../../../apis/course/types";

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

export const useGetCourseList = (tripId:string,roomId:string) => {
    return useQuery<ICourseMessageResponse>({
        queryKey:["course-list",tripId,roomId],
        queryFn:() => getCourseList(roomId),
        enabled:!!tripId && !!roomId,
        retry:false,
        refetchOnWindowFocus:false,
        refetchOnMount:true,
        refetchOnReconnect:false,
        refetchInterval:false,
    })
}