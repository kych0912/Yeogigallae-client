import React, { useState } from "react";
import * as S from "./Styles"; 
import Header from "../../../components/Header/index";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import { IconButton } from "../../../components/Button";
import VoteForm from "./_components/VoteForm/VoteForm";
import Tabs from "./_components/Tabs/Tabs";

const CreateCoursePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <S.Container>
      <S.HeaderContainer>
        <Header 
          leftContent={<IconButton><BackIcon /></IconButton>}
          centerContent={<S.Typography>{"생성하기"}</S.Typography>}
          rightContent={<IconButton><HomeIcon /></IconButton>}
        />
      </S.HeaderContainer>
      <Tabs onTabChange={(index) => setActiveTab(index)} />
      {activeTab === 0 && <VoteForm />}
    </S.Container>
  );
};

export default CreateCoursePage;
