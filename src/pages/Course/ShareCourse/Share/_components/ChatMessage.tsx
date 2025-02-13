import * as S from "./Style";
import Card from "../../../../../components/Card";
import Chain from "../../../../../assets/icons/Chain.svg?react"
import { useLongPress } from "../../../../../Utils/useLongPress";
import modal from "../../../../../components/Modal";

interface ChatMessage{
  name:string;
  avatar:string;
  image:string;
  content:string;
  place:string;
  link:string;
  isMine:boolean;
}

export default function ChatMessage({name,avatar,image,content,place,link,isMine}:ChatMessage){
  const longPressProps = useLongPress({
    onLongPress:()=>{
      modal.confirm.show({
        message:"삭제하시겠습니까?",
        onConfirm:()=>{
          console.log("삭제");
        }
      })
    }
  });

  return (
    <S.Chat.Wrapper {...longPressProps}>
      <S.Chat.Message $isMine={isMine}>
        {isMine ? (
          null
        ) : (
          <S.Chat.Avatar 
            src={avatar} 
            alt={name} 
          />
        )}
        
        <S.Chat.Content>
          {isMine ? (
            null
          ) : (
            <S.Chat.Author>{name}</S.Chat.Author>
          )}
          
          <Card gap="0.625rem">
            <S.Card.Image>
              <img 
                src={image} 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.5rem'
                }} 
              />
            </S.Card.Image>
            
            <S.Card.Text>
              {content}
            </S.Card.Text>
            
            <Card.Divider />
            
            <S.Card.Section>
              <S.Card.Label>장소</S.Card.Label>
              
              <S.Card.PlaceContainer>
                <S.Card.Text>{place}</S.Card.Text>
                <Chain onClick={()=>{
                  window.open(link, '_blank');
                }}/>
              </S.Card.PlaceContainer>
            </S.Card.Section>
          </Card>
        </S.Chat.Content>
      </S.Chat.Message>
    </S.Chat.Wrapper>
  );
}