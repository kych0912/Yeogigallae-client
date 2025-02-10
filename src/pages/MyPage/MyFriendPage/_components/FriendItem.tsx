import { AccordionItem } from "./Accordion"
import * as M from "../../_components/MyPage.style"
import { Member } from "../../../../apis/room/types"
import ProfileGroup from "./ProfileGroup"
import * as S from "./Friend.style"

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
    return(
        <AccordionItem index={index}>
            <S.Accordion.ProfileWrapper>
                <ProfileGroup members={member} />
                {name}
            </S.Accordion.ProfileWrapper>
            {type === "friend" && <S.Item.DeleteButton/>}
        </AccordionItem>




    )
}

//접히지 않는 컴포넌트용
export function AddFriendItem({title, onClick}:{title:string, onClick:()=>void}){
    return(
        <AccordionItem index={0}>
            <S.Accordion.ProfileWrapper>
                <M.AddCircle onClick={onClick}>
                    {"+"}
                </M.AddCircle>
                {title}
            </S.Accordion.ProfileWrapper>

        </AccordionItem>


    )
}