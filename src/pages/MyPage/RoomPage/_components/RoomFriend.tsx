import { Control } from "react-hook-form";
import * as S from "./Room.style";
import { z } from "zod";
import { roomSchema } from "../schema";
import FriendListAvatar from "./RoomFriendListAvatar";

type RoomFormValues = z.infer<typeof roomSchema>;

export default function RoomFriend({control}:{control:Control<RoomFormValues>}) {
    const friend = [
        {
            id:1,
            name:"박준호",
            src:"https://placehold.co/2.5rem",
            size:"2.5rem"
        },
        {
            id:2,
            name:"박준호",
            src:"https://placehold.co/2.5rem",
            size:"2.5rem"

        }
    ]

    return ( 
        <S.RoomFriend.RoomFriendContainer> 
            <S.RoomPage.RoomFriendTitleWrapper>   
                <S.RoomPage.RoomFriendTitle>{"방 친구들"}</S.RoomPage.RoomFriendTitle>
                <S.RoomPage.RoomFriendNumber>{friend.length}</S.RoomPage.RoomFriendNumber>
            </S.RoomPage.RoomFriendTitleWrapper>


            <S.RoomFriend.FriendListContainer>
                {
                    friend.map((friend)=>(  
                        <FriendListAvatar key={friend.id} name={friend.name} src={friend.src} size={"60px"} />
                    ))
                }
            </S.RoomFriend.FriendListContainer>

        </S.RoomFriend.RoomFriendContainer>
    );
}