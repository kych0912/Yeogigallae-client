import React from "react";
import * as S from "./VoteFail.styles";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import { afterData } from "./_data/afterData"; 

const VoteFailPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header
        leftContent={
          <IconButton onClick={() => {
              navigate(`/vote/agree`);
          }}>
              <BackIcon />
          </IconButton>
        }
        centerContent={<S.Typography>{afterData.groupId} {afterData.groupMembers}</S.Typography>}
        rightContent={<IconButton><HomeIcon /></IconButton>}
      />
    </S.Container>
  );
};

export default VoteFailPage;