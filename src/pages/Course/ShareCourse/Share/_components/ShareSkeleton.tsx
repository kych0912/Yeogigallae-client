import * as S from "./Style";
import Skeleton from "../../../../../components/Skeleton";

export default function ShareSkeleton() {
    return (
      <S.Chat.Wrapper>
        {Array.from({length:2}).map((_,index)=>(
        <S.Chat.Wrapper key={index}>
            <S.Chat.Message $isMine={false} key={index}>
                <Skeleton variant="circle" width={"2rem"} height={"2rem"} />
                <S.Chat.Content>
                    <Skeleton variant="rectangular" width={"15rem"} height={"15rem"} />
            </S.Chat.Content>
            </S.Chat.Message>
        </S.Chat.Wrapper>
      ))}
      </S.Chat.Wrapper>
    );
  }