import { AccordionItem } from "./Accordion"
import * as S from "./Friend.style"

export default function FriendItem({
    index,
    name,
    Avatar
}:{
    index:number,
    name:string,
    Avatar:string,
}){

    if(index===0){
        return(
        <AccordionItem index={0}>
            <S.Item.AddCircle>
                {"+"}
            </S.Item.AddCircle>
            {"친구 추가"}
        </AccordionItem>
        )
    }
    
    return(
        <AccordionItem index={index}>
            <S.Accordion.Avatar src={Avatar} alt="friend" />
                {name}
        </AccordionItem>
    )
}