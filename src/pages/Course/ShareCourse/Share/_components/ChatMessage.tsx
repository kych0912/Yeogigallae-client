import * as S from "./Style";
import Card from "../../../../../components/Card";
import Chain from "../../../../../assets/icons/Chain.svg?react"
import { useLongPress } from "../../../../../Utils/useLongPress";
import modal from "../../../../../components/Modal";
import { ChatMessage as TChatMessage } from "./ChatInterface";
import { useDeleteCoursePlace } from "../../../../../react-query/mutation/course/mutations";
import { useParams } from "react-router-dom";


export default function ChatMessage({placeid,name,avatar,image,content,place,link,isMine}:TChatMessage){
  const { roomId } = useParams();
  const {mutate:deleteCoursePlace} = useDeleteCoursePlace();

  const longPressProps = useLongPress({
    onLongPress:()=>{
      if(!roomId) return;
      modal.confirm.show({
        message:"삭제하시겠습니까?",
        onConfirm:()=>{
          deleteCoursePlace({id:placeid,roomId:roomId});
        }
      })
    }
  });

  if(!roomId) return null;

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