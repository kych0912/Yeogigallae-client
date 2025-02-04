import * as S from "../Room.style";
import MyFriendListItemSkeleton from "./MyFriendListItemSkeleton";

export default function MyFriendSkeleton() {
    return (
        <S.MyFriend.MyFriendContainer>
            <S.RoomPage.RoomFriendTitleWrapper>
                <S.RoomPage.RoomFriendTitle>{"여행 친구들"}</S.RoomPage.RoomFriendTitle>
            </S.RoomPage.RoomFriendTitleWrapper>

            <S.MyFriend.MyFriendListContainer>
                <MyFriendListItemSkeleton />
                <MyFriendListItemSkeleton />
                <MyFriendListItemSkeleton />
            </S.MyFriend.MyFriendListContainer>
        </S.MyFriend.MyFriendContainer>
    );
} 