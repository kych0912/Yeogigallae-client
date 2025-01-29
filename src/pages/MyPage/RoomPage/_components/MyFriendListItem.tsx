import * as S from "./Room.style";
import * as M from "../../_components/MyPage.style";

export default function MyFriendListItem({name,src}:{name:string,src:string}) {
    return (
        <S.MyFriendListItem.MyFriendListItemContainer>
            <S.MyFriendListItem.MyFriendListItemNameWrapper>
                <S.Avatar src={src} size={"40px"} />
                <S.MyFriendListItem.MyFriendListItemName>{name}</S.MyFriendListItem.MyFriendListItemName>
            </S.MyFriendListItem.MyFriendListItemNameWrapper>
            <M.AddCircle>{"+"}</M.AddCircle>
        </S.MyFriendListItem.MyFriendListItemContainer>
    )
}
