import { useState } from "react";
import { Button } from "../../../../components/Button";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import buttonData from "./../_data/buttonData";
import { useTripDetailStore } from "../../../../store/functionalStore/useTripDetailStore";

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
      isActive: button.id === "BUTTON1",
    }))
  );
  const [activeButton, setActiveButton] = useState<string>("BUTTON1");

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

  const handleCreateButton = () => {
    const newId = `BUTTON${buttons.length + 1}`;
    const newButton = { id: newId, label: `새 버튼 ${buttons.length + 1}`, isActive: false };
    setButtons((prevButtons) => [...prevButtons, newButton]);

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

    setActiveButton(newId);
  };

  const toggleActiveButton = (id: string) => {
    setActiveButton(id); 
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      )
    );
  };

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
    const { tripPlanDetails } = useTripDetailStore(); // ✅ Zustand에서 상태 가져오기
    const currentState = buttonStates[activeButton];
  
    return (
      <>
        <VoteForm
          onSearch={handleDefaultSearch}
          onCalendar={onCalendar || handleDefaultCalendar}
          isVote={activeTab === "vote"}
          messageValue={
            tripPlanDetails?.result.description ||
            (activeTab === "vote" ? currentState.voteMessage : currentState.courseMessage)
          } // ✅ tripPlanDetails 값이 있으면 덮어쓰기
          onMessageChange={(value) =>
            handleFieldChange(activeTab === "vote" ? "voteMessage" : "courseMessage", value)
          }
          selectedTime={
            tripPlanDetails?.result.voteLimitTime || 
            (activeTab === "vote" ? currentState.voteTime : currentState.courseTime)
          } // ✅ tripPlanDetails 값이 있으면 덮어쓰기
          onTimeChange={(time) =>
            handleFieldChange(activeTab === "vote" ? "voteTime" : "courseTime", time)
          }
          selectedLocation={
            tripPlanDetails?.result.location || 
            currentState.selectedLocation || 
            "장소를 입력하세요"
          } // ✅ tripPlanDetails 값이 있으면 덮어쓰기
        />
        <SlideContainer
          handleCreateButton={handleCreateButton}
          buttonData={buttons}
          onButtonClick={toggleActiveButton}
          activeButton={activeButton}
        />
        <Button size="large" style={{ marginTop: "1.25rem" }}>
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

