import { useState } from "react";
import { Button } from "../../../../components/Button";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
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

  return (
    <>
      <Tabs activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      {activeTab === "vote" && (
        <>
          <VoteForm
            onSearch={onSearch || handleDefaultSearch}
            onCalendar={onCalendar || handleDefaultCalendar}
            isVote={true}
          />
          <ButtonContainer
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            handleCreateButton={handleCreateButton}
            buttonData={buttonData}
          />
          <Button size="large">{"투표 공유하기"}</Button>
        </>
      )}

      {activeTab === "course" && (
        <>
          <VoteForm
            onSearch={onSearch || handleDefaultSearch}
            onCalendar={onCalendar || handleDefaultCalendar}
            isVote={false}
          />
          <ButtonContainer
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            handleCreateButton={handleCreateButton}
            buttonData={buttonData}
          />
          <Button size="large">{"투표 공유하기"}</Button>
        </>
      )}
    </>
  );
}
