import { Control, useController } from "react-hook-form";
import * as S from "../Room.style";
import { z } from "zod";
import { roomSchema } from "../../schema";
import MyFriendListItem from "./MyFriendListItem";
import { useFriend } from "../../../../../contexts/FriendContext";
import { useGetFriends } from "../../../../../react-query/queries/friend/queries";
import MyFriendSkeleton from "./MyFriendSkeleton";
import { useEffect } from "react";

type RoomFormValues = z.infer<typeof roomSchema>;

export default function MyFriend({control}:{
    control:Control<RoomFormValues>,
}) {
    const { 
        field:{value,onChange}
    } = useController({control,name:"roomFriend"});
    const {data:friends,isLoading,isError,error} = useGetFriends();

    const { availableFriends, removeFriend, setAvailableFriends } = useFriend();

    useEffect(()=>{
        if(friends) setAvailableFriends(friends)
    },[friends])

    if(isLoading) return <MyFriendSkeleton />

    if(isError) return <div style={{color:"red"}}>{error.message}</div>

    return ( 
        <S.MyFriend.MyFriendContainer> 
            <S.RoomPage.RoomFriendTitleWrapper>   
                <S.RoomPage.RoomFriendTitle>{"여행 친구들"}</S.RoomPage.RoomFriendTitle>
                <S.RoomPage.RoomFriendNumber>{availableFriends.length}</S.RoomPage.RoomFriendNumber>
            </S.RoomPage.RoomFriendTitleWrapper>


            <S.MyFriend.MyFriendListContainer>
                {
                    availableFriends.map((friend)=>(  
                        <MyFriendListItem 
                            onClick={()=>{
                                onChange([...value,friend])
                                removeFriend(friend)
                            }}
                            key={friend.friendId} 
                            name={friend.friendName} 
                            src={friend.profileImageUrl} 
                        />
                    ))
                }
            </S.MyFriend.MyFriendListContainer>


        </S.MyFriend.MyFriendContainer>
    );
}