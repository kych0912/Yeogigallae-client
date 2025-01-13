import React from "react";
import * as S from "./VoteContent.styles";
import { afterData } from "../_data/afterData";

const VoteContent: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        {afterData.userName}님의 투표 정보입니다.
      </S.Content>
    </S.Wrapper>
  )
}

export default VoteContent;