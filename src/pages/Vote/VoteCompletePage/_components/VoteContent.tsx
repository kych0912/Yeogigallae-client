import React from "react";
import * as S from "./VoteContent.styles";
import { voteData } from "../../VoteAgreePage/_components/VoteCard/voteData";

const VoteContent: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        {voteData.userName}님의 투표 정보입니다.
      </S.Content>
    </S.Wrapper>
  )
}

export default VoteContent;