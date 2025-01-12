import React from "react";
import * as S from "./Styles";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import Calendar from "../../../components/Calendar/Calendar";

const CreateCalendar: React.FC = () => {
  return (
    <S.Container>
      <Header
        leftContent={<IconButton><BackIcon /></IconButton>}
        centerContent={<S.Typography>{"기간 정하기"}</S.Typography>}
        rightContent={<IconButton><HomeIcon /></IconButton>}
      />
      <Calendar/>
    </S.Container>
  );
};

export default CreateCalendar;