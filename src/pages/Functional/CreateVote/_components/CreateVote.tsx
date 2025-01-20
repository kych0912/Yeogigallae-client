import { useState } from "react";
import { Button } from "../../../../components/Button";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import buttonData from "./../_data/buttonData";

interface ButtonState {
  voteMessage: string;
  courseMessage: string;
  voteTime: string | null;
  courseTime: string | null;
  selectedLocation: string | null;
}

export default function CreateVote({
  onCalendar,
  onSearch,
}: {
  onCalendar?: () => void;
  onSearch?: (callback: (selectedPlaceName: string) => void) => void;
  selectedPlaceName?: string | null;
}) {
  const [activeTab, setActiveTab] = useState<"course" | "vote">("vote");
  const [buttons, setButtons] = useState(
    buttonData.map((button) => ({
      ...button,
      isActive: button.id === "BUTTON1", // 초기 활성화 상태 설정
    }))
  );
  const [activeButton, setActiveButton] = useState<string>("BUTTON1");

  // 버튼별 상태를 저장
  const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>(
    buttonData.reduce((acc, button) => {
      acc[button.id] = {
        voteMessage: "",
        courseMessage: "",
        voteTime: null,
        courseTime: null,
        selectedLocation: null,
      };
      return acc;
    }, {} as Record<string, ButtonState>)
  );

  const handleDefaultCalendar = () => {
    console.log("Default onCalendar called");
  };

  const handleDefaultSearch = () => {
    console.log("Default onSearch called");
    onSearch &&
      onSearch((placeName: string) => {
        console.log("Updated Place Name:", placeName);
      });
  };

  // 새 버튼 추가
  const handleCreateButton = () => {
    const newId = `BUTTON${buttons.length + 1}`;
    const newButton = { id: newId, label: `새 버튼 ${buttons.length + 1}`, isActive: false };
    setButtons((prevButtons) => [...prevButtons, newButton]);

    // 새 버튼 상태 초기화
    setButtonStates((prevStates) => ({
      ...prevStates,
      [newId]: {
        voteMessage: "",
        courseMessage: "",
        voteTime: null,
        courseTime: null,
        selectedLocation: null,
      },
    }));

    setActiveButton(newId); // 새로 생성된 버튼 활성화
  };

  // 버튼 클릭 시 활성화 및 상태 업데이트
  const toggleActiveButton = (id: string) => {
    setActiveButton(id); // 클릭된 버튼을 활성화
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      )
    );
  };

  // 필드 값 업데이트
  const handleFieldChange = (field: keyof ButtonState, value: any) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [activeButton]: {
        ...prevStates[activeButton],
        [field]: value,
      },
    }));
  };

  const renderContent = () => {
    const currentState = buttonStates[activeButton]; // 현재 활성화된 버튼의 상태 가져오기

    return (
      <>
        <VoteForm
          onSearch={handleDefaultSearch}
          onCalendar={onCalendar || handleDefaultCalendar}
          isVote={activeTab === "vote"}
          messageValue={activeTab === "vote" ? currentState.voteMessage : currentState.courseMessage}
          onMessageChange={(value) =>
            handleFieldChange(activeTab === "vote" ? "voteMessage" : "courseMessage", value)
          }
          selectedTime={activeTab === "vote" ? currentState.voteTime : currentState.courseTime}
          onTimeChange={(time) =>
            handleFieldChange(activeTab === "vote" ? "voteTime" : "courseTime", time)
          }
          selectedLocation={currentState.selectedLocation || "장소를 입력하세요"}
        />
        <SlideContainer
          handleCreateButton={handleCreateButton}
          buttonData={buttons}
          onButtonClick={toggleActiveButton}
          activeButton={activeButton}
        />
        <Button size="large" style={{ marginTop: "20px" }}>
          {"투표 공유하기"}
        </Button>
      </>
    );
  };

  return (
    <>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </>
  );
}
