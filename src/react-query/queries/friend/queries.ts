import { useQuery } from "@tanstack/react-query";
import { getFriends } from "../../../apis/friend";

export const useGetFriends = () => {
    return useQuery({
        queryKey:['friends'],
        queryFn:getFriends,
        refetchOnWindowFocus:false, 
        refetchOnReconnect:false,   
        retry:false,
    })
}