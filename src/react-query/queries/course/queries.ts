import { useQuery } from "@tanstack/react-query";
import { getCourseInfo, getCourseList, getAiKaKaoCourseAndId } from "../../../apis/course";
import { ICourseInfo, ICourseMessageResponse } from "../../../apis/course/types";
import { Route } from "../../../apis/map/types";

export const useGetCourseInfo = (tripId:string,roomId:string) => {
    return useQuery<ICourseInfo>({
        queryKey:["course",tripId,roomId],
        queryFn:() => getCourseInfo(tripId,roomId),
        enabled:!!tripId && !!roomId,
        retry:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:false,
        refetchInterval:false,
        refetchIntervalInBackground:false,
    })
}

export const useGetCourseList = (tripId:string) => {
    return useQuery<ICourseMessageResponse>({
        queryKey:["course-list",tripId],
        queryFn:() => getCourseList(tripId),
        enabled:!!tripId,
        retry:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:false,
        refetchInterval:false,
    })
}

export const useGetAiKaKaoCourseAndId = (tripId:string | undefined) => {
    return useQuery<{aiCourseId:string, aiKaKaoCourse:Route[]}>({
        queryKey:["ai-course-and-id",tripId],
        queryFn:() => getAiKaKaoCourseAndId(tripId!),
        enabled:!!tripId,
        retry:false,
        refetchOnWindowFocus:false,
        refetchOnReconnect:false,
        refetchInterval:false,
    })
}

