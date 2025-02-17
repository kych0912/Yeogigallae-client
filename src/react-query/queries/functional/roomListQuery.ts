import { useQuery } from "@tanstack/react-query";
import { fetchRoomList } from "../../../apis/functional/roomList";

export const useRoomListQuery = () => {
    return useQuery({
        queryKey: ['roomList'],
        queryFn: fetchRoomList,
        refetchOnWindowFocus: false, 
        refetchOnMount: false,
        refetchOnReconnect: false,   
        retry: false,
    });
};
