import React, { useState } from "react";
import * as S from "./Styles";
import Header from "../../../components/Header/index";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import { IconButton } from "../../../components/Button";
import VoteForm from "./_components/VoteForm/VoteForm";
import Tabs from "./_components/Tabs/Tabs";
import ButtonContainer from "./_components/ButtonContainer/ButtonContainer";
import initialButtonData from "./_data/buttonData";

type ButtonState = {
  place: string;
  price: string;
  date: string;
};

const CreateVotePage: React.FC = () => {
  // 각 버튼의 상태 관리
  const [buttonData, setButtonData] = useState(initialButtonData);
  const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>(
    buttonData.reduce((acc, button) => {
      acc[button.id] = { place: "", price: "", date: "" };
      return acc;
    }, {} as Record<string, ButtonState>)
  );

  // 현재 활성화된 버튼
  const [activeButton, setActiveButton] = useState<string>("BUTTON1");
  const [activeTab, setActiveTab] = useState(0);

  // 활성화된 버튼의 상태 변경
  const handleStateChange = (updatedState: ButtonState) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [activeButton]: updatedState, // 활성화된 버튼의 상태만 업데이트
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

      <Tabs onTabChange={(index) => setActiveTab(index)} />

      {activeTab === 0 && (
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

export default CreateVotePage;
