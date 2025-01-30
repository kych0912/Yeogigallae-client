import { Control, useController } from "react-hook-form";
import * as S from "../Room.style";
import { z } from "zod";
import { roomSchema } from "../../schema";
import FriendListAvatar from "./RoomFriendListAvatar";
import { useFriend } from "../../../../../contexts/FriendContext";
type RoomFormValues = z.infer<typeof roomSchema>;

export default function RoomFriend({control}:{
    control:Control<RoomFormValues>,
}) {
    const { 
        field:{value,onChange}
    } = useController({control,name:"roomFriend"});

    const { addFriend } = useFriend(); 

    return ( 
        <S.RoomFriend.RoomFriendContainer> 
            <S.RoomPage.RoomFriendTitleWrapper>   
                <S.RoomPage.RoomFriendTitle>{"방 친구들"}</S.RoomPage.RoomFriendTitle>
                <S.RoomPage.RoomFriendNumber>{value.length}</S.RoomPage.RoomFriendNumber>
            </S.RoomPage.RoomFriendTitleWrapper>


            <S.RoomFriend.FriendListContainer>
                {
                    value.map((friend)=>(  
                        <FriendListAvatar 
                            onClick={()=>{
                                onChange(value.filter((f)=>f.id !== friend.id))
                                addFriend(friend)
                            }}
                            key={friend.id} 
                            name={friend.name} 
                            src={friend.src} 
                            size={"60px"} 
                        />
                    ))
                }
            </S.RoomFriend.FriendListContainer>

        </S.RoomFriend.RoomFriendContainer>
    );
}