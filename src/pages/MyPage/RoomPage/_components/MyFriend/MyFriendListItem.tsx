import * as S from "../Room.style";
import * as M from "../../../_components/MyPage.style";
import { HTMLAttributes } from "react";

interface MyFriendListItemProps extends HTMLAttributes<HTMLDivElement>{
    name:string;
    src:string;
}

export default function MyFriendListItem({name,src,onClick}:MyFriendListItemProps) {
    return (
        <S.MyFriendListItem.MyFriendListItemContainer onClick={onClick}>
            <S.MyFriendListItem.MyFriendListItemNameWrapper>
                <S.Avatar src={src} size={"40px"} />
                <S.MyFriendListItem.MyFriendListItemName>{name}</S.MyFriendListItem.MyFriendListItemName>
            </S.MyFriendListItem.MyFriendListItemNameWrapper>
            <M.AddCircle>{"+"}</M.AddCircle>
        </S.MyFriendListItem.MyFriendListItemContainer>
    )
}
