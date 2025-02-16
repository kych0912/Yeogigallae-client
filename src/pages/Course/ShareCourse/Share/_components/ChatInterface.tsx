import * as S from "./Style";
import ChatMessage from "./ChatMessage";

export interface TPlace {
    id:number;
    placeName:string;
    address:string;
    latitude:number;
    longitude:number;
    image:string;
    description:string;
    userName:string;
    profileImage:string;
}

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
