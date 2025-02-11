import { useState } from "react";
import { useVoteFormContext } from "../../context/VoteFormContext";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import { Button } from "../../../../components/Button";
import { useVoteFormMutation } from "../../../../react-query/mutation/functional/useVoteFormMutation";
import { useVoteForm } from "../../../../hooks/useForm/useVoteForm";

export default function CreateVoteContent({
  onCalendar,
  onSearch,
}: {
  onCalendar: () => void;
  onSearch: () => void;
}) {
  const { tripPlanType, setTripPlanType, roomId } = useVoteFormContext();
  const { getValues } = useVoteForm(tripPlanType, roomId);
  const voteMutation = useVoteFormMutation();

  const [selectedPlace] = useState<string>(""); 

  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={setTripPlanType} />
      <>
        <VoteForm
          tripPlanType={tripPlanType}
          roomId={roomId}
          onSearch={onSearch}
          selectedPlace={selectedPlace} 
          onCalendar={onCalendar}
        />
        <SlideContainer />
        <Button size="large" style={{ marginTop: "1.25rem" }} onClick={() => voteMutation.mutate(getValues())}>
          {"투표 공유하기"}
        </Button>
      </>
    </>
  );
}
