import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../../apis/room";

export const useGetRooms = () => {
    return useQuery({
        queryKey:['rooms'],
        queryFn:getRooms,
        refetchOnWindowFocus:false, 
        refetchOnMount:false,
        refetchOnReconnect:false,   
        retry:false,
    })
}
