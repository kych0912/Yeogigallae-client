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
  onSearch: (callback: (selectedPlaceName: string) => void) => void;
}) {
  const { tripPlanType, setTripPlanType, roomId } = useVoteFormContext();
  const { getValues } = useVoteForm(tripPlanType, roomId);
  const voteMutation = useVoteFormMutation(); 

  console.log(roomId);

  const handleSubmit = async () => {
    const formData = getValues(); 
    console.log("Test Form", formData);

    const testFormData = {
      ...formData,
      location: formData.location || "테스트 장소",
      startDate: formData.startDate || "2025-02-01",
      endDate: formData.endDate || "2025-02-07",
      voteLimitTime: formData.voteLimitTime || "60분",
      minDays: formData.minDays || 1,
      maxDays: formData.maxDays || 7,
      imageUrl: formData.imageUrl || "https://example.com/test.jpg",
      scheduleDetails: formData.scheduleDetails || { message: "테스트 일정", price: "10만원" },
      courseDetails: formData.courseDetails || { message: "테스트 코스" },
    };

    console.log("POST test ", testFormData);

    voteMutation.mutate(testFormData);

  };

  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={setTripPlanType} />
      <>
        <VoteForm tripPlanType={tripPlanType} roomId={roomId} onSearch={onSearch} onCalendar={onCalendar} />
        <SlideContainer />
        <Button size="large" style={{ marginTop: "1.25rem" }} onClick={handleSubmit}>
          {"투표 공유하기"}
        </Button>
      </>
    </>
  );
}
