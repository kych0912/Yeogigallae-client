import { Control, useController } from "react-hook-form";
import * as S from "./Room.style";
import { z } from "zod";
import { roomSchema } from "../schema";
import MyFriendListItem from "./MyFriendListItem";
import { useFriend } from "../../../../contexts/FriendContext";

type RoomFormValues = z.infer<typeof roomSchema>;

export default function MyFriend({control}:{
    control:Control<RoomFormValues>,
}) {
    const { 
        field:{value,onChange}
    } = useController({control,name:"roomFriend"});

    const { availableFriends, removeFriend } = useFriend();

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
                            key={friend.id} 
                            name={friend.name} 
                            src={friend.src} 
                        />
                    ))
                }
            </S.MyFriend.MyFriendListContainer>


        </S.MyFriend.MyFriendContainer>
    );
}