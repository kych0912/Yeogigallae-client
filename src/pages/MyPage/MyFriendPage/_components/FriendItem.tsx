import { AccordionItem } from "./Accordion"
import * as M from "../../_components/MyPage.style"
import { Member } from "../../../../apis/room/types"
import ProfileGroup from "./ProfileGroup"

//접히는 컴포넌트용
export function FriendItem({
    index,
    name,
    member
}:{
    index:number,
    name:string,
    member:Member[],
}){
    return(
        <AccordionItem index={index}>
            <ProfileGroup members={member} />
                {name}
        </AccordionItem>


    )
}

//접히지 않는 컴포넌트용
export function AddFriendItem({title, onClick}:{title:string, onClick:()=>void}){
    return(
        <AccordionItem index={0}>
            <M.AddCircle onClick={onClick}>

                {"+"}
            </M.AddCircle>
            {title}
        </AccordionItem>

    )
}