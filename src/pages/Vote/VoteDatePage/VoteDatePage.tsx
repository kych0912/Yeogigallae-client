import React from "react";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import Calendar from "../../../components/Calendar/Calendar";

const VoteDatePage: React.FC = () => {
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
        centerContent={<S.Typography>{"투표중"}</S.Typography>}
        rightContent={<IconButton><HomeIcon /></IconButton>}
      />
      <Calendar/>
    </S.Container>
  );
};

export default VoteDatePage;