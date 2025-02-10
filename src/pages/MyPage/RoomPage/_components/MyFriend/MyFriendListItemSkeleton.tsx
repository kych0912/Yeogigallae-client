import * as S from "../Room.style";
import Skeleton from "../../../../../components/Skeleton";

export default function MyFriendListItemSkeleton() {
    return (
        <S.MyFriendListItem.MyFriendListItemContainer>
            <Skeleton variant="rectangular" width="100%" height="40px" />
        </S.MyFriendListItem.MyFriendListItemContainer>
    );
} 