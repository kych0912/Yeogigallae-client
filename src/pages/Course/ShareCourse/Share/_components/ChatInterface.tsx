import { useState } from "react";
import * as S from "./Style";
import ChatMessage from "./ChatMessage";

interface ChatMessage{
    name:string;
    avatar:string;
    image:string;
    content:string;
    place:string;
    link:string;
    isMine:boolean;
}

export default function ChatInterface(){
    const [message] = useState<ChatMessage[]>([{
        name:"규리",
        avatar:"https://picsum.photos/200/300",
        image:"https://picsum.photos/200/300",
        content:"안녕하세요 코스짜기 시작했습니다.",
        place:"전북특별자치도 전주시 완산구 기린대로 99",
        link:"https://picsum.photos/200/300",
        isMine:true,
    },{
        name:"규리",
        avatar:"https://picsum.photos/200/300",
        image:"https://picsum.photos/200/300",
        content:"안녕하세요 코스짜기 시작했습니다.",
        place:"전북특별자치도 전주시 완산구 기린대로 99",
        link:"https://picsum.photos/200/300",
        isMine:false,
    }]);

    return(
        <S.Chat.Wrapper>
            {
                message.map((msg,index)=>(
                    <ChatMessage key={index} {...msg}/>
                ))
            }
        </S.Chat.Wrapper>
    )
}
