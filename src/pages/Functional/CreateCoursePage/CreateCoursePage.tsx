import React, { useState } from "react";
import * as S from "./Styles";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import Tabs from "../CreateVotePage/_components/Tabs/Tabs";
import VoteForm from "./_components/VoteFoam/VoteFoam";
import ButtonContainer from "../CreateVotePage/_components/ButtonContainer/ButtonContainer";
import initialButtonData from "../../../pages/Functional/CreateVotePage/_data/buttonData";

type ButtonState = {
  place: string;
  date: string;
};

const CreateCoursePage: React.FC = () => {
  // 각 버튼의 상태 관리
  const [buttonData, setButtonData] = useState(initialButtonData);
  const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>(
    buttonData.reduce((acc, button) => {
      acc[button.id] = { place: "", date: "" };
      return acc;
    }, {} as Record<string, ButtonState>)
  );

  // 현재 활성화된 버튼
  const [activeButton, setActiveButton] = useState<string>("BUTTON1");
  const [activeTab] = useState(1);

  // 활성화된 버튼의 상태 변경
  const handleStateChange = (updatedState: ButtonState) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [activeButton]: updatedState,
    }));
  };

  const handleCreateButton = () => {
    const newId = `BUTTON${buttonData.length + 1}`;
    const newButton = { id: newId, label: `새 버튼 ${buttonData.length}` };
  
    console.log("Before Add:", { buttonData, buttonStates });
  
    // 버튼 리스트에 추가
    setButtonData((prev) => [...prev, newButton]);
  
    // 버튼 상태 초기화
    setButtonStates((prevState) => ({
      ...prevState,
      [newId]: { place: "", price: "", date: "" },
    }));
    setButtonData([...buttonData, newButton]);
    setActiveButton(newId);
  
    console.log("After Add:", { buttonData, buttonStates, activeButton: newId });
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <Header
          leftContent={<IconButton><BackIcon /></IconButton>}
          centerContent={<S.Typography>{"생성하기"}</S.Typography>}
          rightContent={<IconButton><HomeIcon /></IconButton>}
        />
      </S.HeaderContainer>

      <Tabs />

      {activeTab === 1 && (
        <VoteForm
          state={buttonStates[activeButton]} // 활성화된 버튼의 상태 전달
          onStateChange={handleStateChange} // 활성화된 버튼의 상태 업데이트
        />
      )}

      <ButtonContainer
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        handleCreateButton={handleCreateButton}
        buttonData={buttonData}
      />

      <S.SubmitButton>투표 공유하기</S.SubmitButton>
    </S.Container>
  );
};

export default CreateCoursePage;
