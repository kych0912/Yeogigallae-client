import { useQuery } from "@tanstack/react-query";
import { getNotice } from "../../../apis/notice";

export const useGetNotice = () => {
    return useQuery({
        queryKey: ["notice"],
        queryFn: getNotice,
        //알림 리패치 주기 1분
        refetchInterval: 1000 * 60 * 1,
    });
};
