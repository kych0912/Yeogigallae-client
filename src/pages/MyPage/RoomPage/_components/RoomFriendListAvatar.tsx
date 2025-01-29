import * as S from "./Room.style";

export default function FriendListAvatar({name,src,size}:{name:string,src:string,size:string}) {
    return (
        <S.RoomFriendListAvatar.RoomFriendListAvatarContainer>
            <S.Avatar src={src} size={size} />
            <S.RoomFriendListAvatar.RoomFriendListAvatarName>
                {name}
            </S.RoomFriendListAvatar.RoomFriendListAvatarName>
            <S.RoomFriendListAvatar.RoomFriendListAvatarDeleteButton/>
        </S.RoomFriendListAvatar.RoomFriendListAvatarContainer>
    )
}
