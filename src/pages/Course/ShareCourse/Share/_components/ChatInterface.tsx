import * as S from "./Style";
import ChatMessage from "./ChatMessage";

export interface ChatMessage{
    placeid:string;
    name:string;
    avatar:string;
    image:string;
    content:string;
    place:string;
    link:string;
    isMine:boolean;
}

export default function ChatInterface({messages}:{messages:ChatMessage[]}){    
    return(
        <S.Chat.Wrapper>
            {
                messages.map((msg,index)=>(
                    <ChatMessage key={index} {...msg}/>
                ))
            }
        </S.Chat.Wrapper>
    )
}
