import { useState } from "react";
import * as S from "../../_components/Functional.styles";
import { Button } from "../../../../components/Button";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import initialButtonData from "./../_data/buttonData";

type ButtonState = {
  place: string;
  date: string;
};

export default function CreatePage({
  onCalendar,
  onSearch,
}: {
  onCalendar?: () => void;
  onSearch?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"course" | "vote">("course");

  // 공통 상태 관리
  const [buttonData, setButtonData] = useState(initialButtonData);
  const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>(
    buttonData.reduce((acc, button) => {
      acc[button.id] = { place: "", date: "" };
      return acc;
    }, {} as Record<string, ButtonState>)
  );

  const [activeButton, setActiveButton] = useState<string>("BUTTON1");

  const handleCreateButton = () => {
    const newId = `BUTTON${buttonData.length + 1}`;
    const newButton = { id: newId, label: `새 버튼 ${buttonData.length}` };

    setButtonData((prev) => [...prev, newButton]);
    setButtonStates((prevState) => ({
      ...prevState,
      [newId]: { place: "", date: "" },
    }));
    setActiveButton(newId);
  };

  const handleDefaultCalendar = () => {
    console.log("Default onCalendar called");
  };

  const handleDefaultSearch = () => {
    console.log("Default onSearch called");
  };

  return (
    <>
      <Tabs
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />

        {activeTab === "course" && (
          <>
            <VoteForm onSearch={onSearch || handleDefaultSearch} onCalendar={onCalendar || handleDefaultCalendar} />
            <ButtonContainer
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              handleCreateButton={handleCreateButton}
              buttonData={buttonData}
            />
            <Button size="large">
              {"코스 공유하기"}
            </Button>
          </>
        )}

        {activeTab === "vote" && (
          <>
            <VoteForm onSearch={onSearch || handleDefaultSearch} onCalendar={onCalendar || handleDefaultCalendar}/>
            <ButtonContainer
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              handleCreateButton={handleCreateButton}
              buttonData={buttonData}
            />
            <Button size="large">
              {"투표 공유하기"}
            </Button>
          </>
        )}
    </>
  );
}
