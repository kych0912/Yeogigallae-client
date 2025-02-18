import { AccordionItem } from "./Accordion"
import * as M from "../../_components/MyPage.style"
import { Member } from "../../../../apis/room/types"
import ProfileGroup from "./ProfileGroup"
import * as S from "./Friend.style"
import modal from "../../../../components/Modal"
import { useDeleteFriend } from "../../../../react-query/mutation/friend/mutations"

//접히는 컴포넌트용
export function FriendItem({
    index,
    name,
    member,
    type="friend"
}:{
    index:number,
    name:string,
    member:Member[],
    type?: "room" | "friend"
}){
    const {mutate:deleteFriend} = useDeleteFriend();
    return(
        <AccordionItem index={index}>
            <S.Accordion.ProfileWrapper>
                <ProfileGroup members={member} />
                {name}
            </S.Accordion.ProfileWrapper>
            {type === "friend" && <S.Item.DeleteButton onClick={()=>{
                modal.confirm.show({
                    message:"친구를 삭제하시겠습니까?",
                    onConfirm:()=>{
                        deleteFriend(member[0].userId);
                    }
                })
            }}/>}
        </AccordionItem>
    )
}

//접히지 않는 컴포넌트용
export function AddFriendItem({title, onClick}:{title:string, onClick:()=>void}){
    return(
        <AccordionItem index={0} onClick={onClick}>
            <S.Accordion.ProfileWrapper>
                <M.AddCircle>
                    {"+"}
                </M.AddCircle>
                {title}
            </S.Accordion.ProfileWrapper>

        </AccordionItem>


    )
}