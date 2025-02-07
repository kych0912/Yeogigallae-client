import { useMutation } from "@tanstack/react-query";
import { createRoom } from "../../../apis/room";
import { RoomFormValues } from "../../../apis/room/types";

export const useCreateRoom = () => {
    return useMutation({
        mutationFn: (data: RoomFormValues) => {
            return createRoom(data);
        },
    });
}
