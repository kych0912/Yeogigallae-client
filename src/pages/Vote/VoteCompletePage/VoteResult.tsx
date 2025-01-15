import React from "react";
import * as S from "./VoteResult.styles";
import ResultCard from "./_components/ResultCard/ResultCard";
import { voteData } from "../VoteAgreePage/_components/VoteCard/voteData";

const VoteResult: React.FC = () => {
  return (
    <>
      <S.StyledCard>
        <S.CardWrapper>
          <ResultCard />
        </S.CardWrapper>

        <S.Content>
          {voteData.nickName}님이 여행 투표를 올렸습니다. <br />
          48시간 이후 종료됩니다.
        </S.Content>
      </S.StyledCard>
    </>
  );
};

export default VoteResult;