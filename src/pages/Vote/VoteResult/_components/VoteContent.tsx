import * as S from "./VoteContent.styles";
import { voteData } from "../../voteData";

export default function VoteContent() {
  return (
    <S.Wrapper>
      <S.Content>
        {voteData.userName}님의 투표 정보입니다.
      </S.Content>
    </S.Wrapper>
  )
}
