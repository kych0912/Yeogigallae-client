import styled from "styled-components";
import { Button } from "../../../../components/Button";

export const BottomButtonWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  padding: 0 1.25rem;
  max-width: 425px;
  margin: 0 auto;
  box-sizing: border-box;
  display:flex;
  gap:0.625rem;
  & > button {
    width: 100%;
  }
`;

export const CancelButton = styled(Button)`
    color:white;
    background-color:#434343;
`;

export const Avatar = styled.img<{size:string}>`
    width:${({size})=>size};
    height:${({size})=>size};
    border-radius:50%;
    background-color:white;
`

export const RoomForm = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    gap:2.5rem;
    margin-top:0.75rem;
`

//roompage 공통 style
export const RoomPage = {
    RoomFriendTitle : styled.div`
        font-family:${({theme})=>theme.fontFamily.semiBold};

        font-size:1rem;
        color:white;
    `,
    RoomFriendTitleWrapper : styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100%;
    `,
    RoomFriendNumber : styled.div`
        font-family:${({theme})=>theme.fontFamily.regular};
        font-size:0.75rem;
        color:white;
        color:#434343;
    `
}

//roomtitleform 공통 style
export const RoomTitleForm = {
    RoomTitleFormContainer : styled.div`
        gap:1.25rem;
        display:flex;
        flex-direction:column;
        align-items:start;
        justify-content:center;
        width:100%;
    `,
    RoomTitleFormError : styled.div`
        font-family:${({theme})=>theme.fontFamily.regular};
        font-size:0.75rem;
        color:red;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    `
}

//roomfriend 공통 style
export const RoomFriend = {
    RoomFriendContainer : styled.div`
        display:flex;
        flex-direction:column;
        align-items:start;
        justify-content:center;
        width:100%;
    `,
    FriendListContainer : styled.div`
        display:flex;
        align-items:center;
        justify-content:start;
        gap:0.875rem;
        width:100%;
        margin-top:1.25rem;
    `
}

export const RoomFriendListAvatar = {
    RoomFriendListAvatarContainer : styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:0.375rem;
        position:relative;
    `,
    RoomFriendListAvatarName : styled.div`
        font-family:${({theme})=>theme.fontFamily.regular};
        font-size:0.875rem;
        color:white;
    `,
    RoomFriendListAvatarDeleteButton : styled.div`
        position:absolute;
        top:0;
        right:0;
        display:flex;
        align-items:center;
        justify-content:center;
        width:1.25rem;
        height:1.25rem;
        border-radius:50%;
        background-color:${({theme})=>theme.colors.primary};
        color:white;
        &::before {
            content: "";
            width: 10px;     
            height: 1.75px;    
            background-color:white;
        }
    `,

}

export const MyFriend = {
    MyFriendContainer : styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        width:100%;
    `,
    MyFriendListContainer : styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:0.875rem;
        margin-top:1.25rem;
        width:100%;
    `
}


export const MyFriendListItem = {
    MyFriendListItemContainer : styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 0.875rem;
        width:100%;
        box-sizing:border-box;
    `,
    MyFriendListItemNameWrapper : styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        gap:0.375rem;
    `,
    MyFriendListItemName : styled.div`
        font-family:${({theme})=>theme.fontFamily.regular};
        font-size:0.875rem;
        color:white;
    `,
}
