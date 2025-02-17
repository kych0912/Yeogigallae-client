import * as S from "./Style";
import ChatMessage from "./ChatMessage";
import { TPlace } from "../../share.types";


export default function ChatInterface({messages}:{messages:TPlace[]}){    
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
