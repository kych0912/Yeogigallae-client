import { useState } from "react";
import { Button } from "../../../../components/Button";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import initialButtonData from "./../_data/buttonData";

export default function CreateVote({
  onCalendar,
  onSearch,
}: {
  onCalendar?: () => void;
  onSearch?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"course" | "vote">("vote");

  // 버튼 데이터 상태 관리
  const [buttonData, setButtonData] = useState(initialButtonData);
  const [activeButton, setActiveButton] = useState<string>("BUTTON1");

  const handleCreateButton = () => {
    const newId = `BUTTON${buttonData.length + 1}`;
    const newButton = { id: newId, label: `새 버튼 ${buttonData.length}` };

    setButtonData((prev) => [...prev, newButton]);
    setActiveButton(newId);
  };

  const handleDefaultCalendar = () => {
    console.log("Default onCalendar called");
  };

  const handleDefaultSearch = () => {
    console.log("Default onSearch called");
  };

  // 탭에 따라 렌더링할 콘텐츠를 분리
  const renderContent = () => (
    <>
      <VoteForm
        onSearch={onSearch || handleDefaultSearch}
        onCalendar={onCalendar || handleDefaultCalendar}
        isVote={activeTab === "vote"}
      />
      <SlideContainer
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        handleCreateButton={handleCreateButton}
        buttonData={buttonData}
      />
      <Button size="large" style={{ marginTop: "20px" }}>
        {activeTab === "vote" ? "투표 공유하기" : "코스 공유하기"}
      </Button>
    </>
  );

  return (
    <>
      {/* 탭 전환 */}
      <Tabs activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      {/* 조건부 렌더링된 콘텐츠 */}
      {renderContent()}
    </>
  );
}
