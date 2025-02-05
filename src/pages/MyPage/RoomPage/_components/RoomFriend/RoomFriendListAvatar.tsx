import { HTMLAttributes } from "react";
import * as S from "../Room.style";

interface FriendListAvatarProps extends HTMLAttributes<HTMLDivElement>{
    name:string;
    src:string;
    size:string;
}

export default function FriendListAvatar({name,src,size,onClick}:FriendListAvatarProps) {
    return (
        <S.RoomFriendListAvatar.RoomFriendListAvatarContainer onClick={onClick}>
            <S.Avatar src={src} size={size} />
            <S.RoomFriendListAvatar.RoomFriendListAvatarName>
                {name}
            </S.RoomFriendListAvatar.RoomFriendListAvatarName>
            <S.RoomFriendListAvatar.RoomFriendListAvatarDeleteButton/>
        </S.RoomFriendListAvatar.RoomFriendListAvatarContainer>
    )
}
