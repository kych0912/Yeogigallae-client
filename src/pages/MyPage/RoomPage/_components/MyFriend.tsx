import { Control } from "react-hook-form";
import * as S from "./Room.style";
import { z } from "zod";
import { roomSchema } from "../schema";
import MyFriendListItem from "./MyFriendListItem";

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
        <S.MyFriend.MyFriendContainer> 
            <S.RoomPage.RoomFriendTitleWrapper>   
                <S.RoomPage.RoomFriendTitle>{"여행 친구들"}</S.RoomPage.RoomFriendTitle>
                <S.RoomPage.RoomFriendNumber>{friend.length}</S.RoomPage.RoomFriendNumber>
            </S.RoomPage.RoomFriendTitleWrapper>


            <S.MyFriend.MyFriendListContainer>
                {
                    friend.map((friend)=>(  
                        <MyFriendListItem key={friend.id} name={friend.name} src={friend.src} />
                    ))
                }
            </S.MyFriend.MyFriendListContainer>


        </S.MyFriend.MyFriendContainer>
    );
}