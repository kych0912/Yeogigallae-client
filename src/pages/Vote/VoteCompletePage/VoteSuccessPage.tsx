import React from "react";
import * as S from "./VoteSuccess.tyles";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import ResultCard from "./_components/ResultCard/ResultCard";
import { voteData } from "../VoteAgreePage/_components/VoteCard/voteData";

const VoteSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header
        leftContent={
          <IconButton onClick={() => {
              navigate(`/vote/date`);
          }}>
              <BackIcon />
          </IconButton>
        }
        centerContent={<S.Typography>{voteData.groupId} {voteData.groupMembers}</S.Typography>}
        rightContent={<IconButton><HomeIcon /></IconButton>}
      />

      <S.CardWrapper>
        <ResultCard />
      </S.CardWrapper>

      <S.Content>
        {voteData.nickName}님이 여행 투표를 올렸습니다. <br />
        48시간 이후 종료됩니다.
      </S.Content>
    </S.Container>
  );
};

export default VoteSuccessPage;