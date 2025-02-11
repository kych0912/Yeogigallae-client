import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../apis/user/index";

export const useGetUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });
};
