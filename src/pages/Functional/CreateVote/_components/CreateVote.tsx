import { useVoteFormContext } from "../context/VoteFormContext/VoteFormProvider";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import { Button } from "../../../../components/Button";

export default function CreateVoteContent({
  onCalendar,
  onSearch,
}: {
  onCalendar?: () => void;
  onSearch?: (callback: (selectedPlaceName: string) => void) => void;
}) {
  const { isLoading, tripPlanType, setTripPlanType } = useVoteFormContext();

  const tripPlanId = 22;

  console.log("🔹 강제 설정된 tripPlanId:", tripPlanId);
  
  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={(tab) => setTripPlanType(tab)} />

      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          <VoteForm tripPlanType={tripPlanType} onSearch={onSearch || (() => {})} onCalendar={onCalendar || (() => {})} />

          <SlideContainer />

          <Button size="large" style={{ marginTop: "1.25rem" }}>
            {tripPlanType === "VOTE" ? "투표 공유하기" : "코스 저장하기"}
          </Button>
        </>
      )}
    </>
  );
}
