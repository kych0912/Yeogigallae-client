import { useQuery } from "@tanstack/react-query";
import { getNotice } from "../../../../apis/main/notice/index";

export const useGetNotice = () => {
    return useQuery({
        queryKey: ["noticehome"],
        queryFn: getNotice,
        refetchInterval: 1000 * 60 * 1,
    });
};
