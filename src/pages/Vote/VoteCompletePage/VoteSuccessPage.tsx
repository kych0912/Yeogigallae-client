import React from "react";
import * as S from "./VoteSuccess.tyles";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import DetailCard from "../VoteCompletePage/_components/DetailCard/DetailCard";
import { afterData } from "./_data/afterData"; 

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
        centerContent={<S.Typography>{afterData.groupId} {afterData.groupMembers}</S.Typography>}
        rightContent={<IconButton><HomeIcon /></IconButton>}
      />

      <S.CardWrapper>
        <DetailCard />
      </S.CardWrapper>
    </S.Container>
  );
};

export default VoteSuccessPage;