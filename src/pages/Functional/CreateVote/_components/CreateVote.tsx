import { useState } from "react";
import { useVoteFormContext } from "../../context/VoteFormContext";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import { Button } from "../../../../components/Button";

export default function CreateVoteContent({
  onCalendar,
  onSearch,
}: {
  onCalendar: () => void;
  onSearch: (callback: (selectedPlaceName: string) => void) => void;
}) {
  const { tripPlanType, setTripPlanType } = useVoteFormContext();
  const [roomId] = useState(22); 

  console.log("🔹 강제 설정된 roomId:", roomId);

  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={setTripPlanType} />
        <>
          <VoteForm tripPlanType={tripPlanType} roomId={roomId} onSearch={onSearch} onCalendar={onCalendar} />
          <SlideContainer />
          <Button size="large" style={{ marginTop: "1.25rem" }}>
            {tripPlanType === "SCHEDULE" ? "투표 공유하기" : "코스 저장하기"}
          </Button>
        </>
    </>
  );
}
