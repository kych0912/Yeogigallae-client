import { useMutation } from "@tanstack/react-query";
import { postCoursePlace } from "../../../apis/course";
import { ICoursePlaceResponse } from "../../../apis/course/types";
import { TShareCoursePlace } from "../../../apis/course";   

export const usePostCoursePlace = () => {
    return useMutation<ICoursePlaceResponse, Error, {place: TShareCoursePlace[], roomId: string}>({
        mutationFn: ({place, roomId}) => postCoursePlace(place, roomId),
    });
}


