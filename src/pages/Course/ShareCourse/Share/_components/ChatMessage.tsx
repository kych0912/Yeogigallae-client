import * as S from "./Style";
import Card from "../../../../../components/Card";
import Chain from "../../../../../assets/icons/Chain.svg?react"
import { useLongPress } from "../../../../../Utils/useLongPress";
import modal from "../../../../../components/Modal";
import { useDeleteCoursePlace } from "../../../../../react-query/mutation/course/mutations";
import { useParams } from "react-router-dom";
import { TPlace } from "../../../../Course/ShareCourse/share.types";

const isMine = false;

export default function ChatMessage({id,placeName,address,image,description,userName,profileImage}:TPlace){
  const { roomId } = useParams();
  const {mutate:deleteCoursePlace} = useDeleteCoursePlace();

  const longPressProps = useLongPress({
    onLongPress:()=>{
      if(!roomId) return;
      modal.confirm.show({
        message:"삭제하시겠습니까?",
        onConfirm:()=>{
          deleteCoursePlace({id:id.toString(),roomId:roomId});
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
            src={profileImage} 
            alt={userName} 
          />
        )}
        
        <S.Chat.Content>
          {isMine ? (
            null
          ) : (
            <S.Chat.Author>{userName}</S.Chat.Author>
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
              {description}
            </S.Card.Text>
            
            <Card.Divider />
            
            <S.Card.Section>
              <S.Card.Label>장소</S.Card.Label>
              
              <S.Card.PlaceContainer>
                <S.Card.Text>{placeName}</S.Card.Text>
                <Chain onClick={()=>{
                  window.navigator.clipboard.writeText(address);
                }}/>
              </S.Card.PlaceContainer>
            </S.Card.Section>
          </Card>
        </S.Chat.Content>
      </S.Chat.Message>
    </S.Chat.Wrapper>
  );
}