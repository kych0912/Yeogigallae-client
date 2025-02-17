import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFriend, acceptInvite } from "../../../apis/friend";
import { Friend } from "../../../apis/friend/types";

export const useDeleteFriend = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:deleteFriend,
        onMutate:async (friendId)=>{
            //쿼리 요청 취소
            //낙관적 업데이트를 overwrite 하지 않게
            await queryClient.cancelQueries({queryKey:['friends']});

            //이전 데이터 저장
            const previousFriends = queryClient.getQueryData<Friend[]>(['friends']);

            //객체 복사 (삭제된 친구 제외)
            const newFriends = previousFriends?.filter(
                (friend)=>friend.friendId !== friendId
            );
            queryClient.setQueryData(['friends'],newFriends);

            //이전 데이터 반환
            return { previousFriends };
        },
        onError:(_, __, context)=>{
            queryClient.setQueryData(['friends'],context?.previousFriends);
        },
        onSettled:()=>{
            queryClient.invalidateQueries({queryKey:['friends']});
        }
    })
}

export const useAcceptInvite = () => {
    return useMutation({
        mutationFn:acceptInvite,    
    })
}
