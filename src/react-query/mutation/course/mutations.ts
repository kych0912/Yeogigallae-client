import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCoursePlace, deleteCoursePlace } from "../../../apis/course";
import { ICoursePlaceResponse } from "../../../apis/course/types";
import { TShareCoursePlace } from "../../../apis/course";   

export const usePostCoursePlace = () => {
    return useMutation<ICoursePlaceResponse, Error, {place: TShareCoursePlace[], roomId: string}>({
        mutationFn: ({place, roomId}) => postCoursePlace(place, roomId),
    });
}

export const useDeleteCoursePlace = () => {
    const queryClient = useQueryClient();
    return useMutation<
        ICoursePlaceResponse, 
        Error, 
        {id: string, roomId: string}, 
        {previousCourseList: ICoursePlaceResponse | undefined}
    >({
        mutationFn: ({id, roomId}) => deleteCoursePlace(id, roomId),
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


