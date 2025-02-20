import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCoursePlace, deleteCoursePlace, TShareCoursePlacesInfo } from "../../../apis/course";
import { ICoursePlaceResponse } from "../../../apis/course/types";

export const usePostCoursePlace = () => {
    return useMutation<ICoursePlaceResponse, Error, {placeCardInfo: TShareCoursePlacesInfo[], tripId: string}>({
        mutationFn: ({placeCardInfo, tripId}) => postCoursePlace(placeCardInfo, tripId),
    });
}

export const useDeleteCoursePlace = () => {
    const queryClient = useQueryClient();
    return useMutation<
        ICoursePlaceResponse, 
        Error, 
        {id: string, tripId: string}, 
        {previousCourseList: ICoursePlaceResponse | undefined}
    >({
        mutationFn: ({id, tripId}) => deleteCoursePlace(id, tripId),
        onMutate: async ({id}) => {
            await queryClient.cancelQueries({queryKey:['course-list']});
            const previousCourseList = queryClient.getQueryData<ICoursePlaceResponse>(['course-list']);
            const newCourseList = previousCourseList?.result.filter((course) => course.id !== id);
            queryClient.setQueryData(['course-list'], newCourseList);
            return { previousCourseList };
        },
        onError: (_, __, context) => {
            if (context) {
                queryClient.setQueryData(['course-list'], context.previousCourseList);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey:['course-list']});
        }
    });
}
