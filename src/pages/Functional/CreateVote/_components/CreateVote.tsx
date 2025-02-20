import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { tripPlanType, setTripPlanType, roomId } = useVoteFormContext();
  const { getValues, isValid } = useVoteForm(tripPlanType, roomId);
  const voteMutation = useVoteFormMutation();
  
  const [hiddenRooms, setHiddenRooms] = useState<number[]>([]);

  const handleSubmit = () => {
    if (!isValid) return;
  
    const latestValues = getValues();
    const sanitizeData = (value: any) => (value === "" || value === undefined ? null : value);
  
    const requestData = {
      ...latestValues,
      scheduleDetails:
        tripPlanType === "SCHEDULE"
          ? latestValues.scheduleDetails
            ? {
                message: sanitizeData(latestValues.scheduleDetails.message),
                price: sanitizeData(latestValues.scheduleDetails.price),
              }
            : null
          : null,
  
      courseDetails:
        tripPlanType === "COURSE"
          ? latestValues.courseDetails
            ? {
                message: sanitizeData(latestValues.courseDetails.message),
              }
            : null
          : null,
    };
  
    voteMutation.mutate(requestData, {
      onSuccess: (data) => {
        const tripId = data?.result?.id;
        const roomId = requestData.roomId;
        if (tripId && roomId) {
          setHiddenRooms((prev) => [...prev, roomId]);
          if (tripPlanType === "COURSE") {
            navigate(`/course/${tripId}/${roomId}`);
          } else {
            navigate(`/vote/${tripId}/${roomId}`);
          }
        }
      },
    });
  };

  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={setTripPlanType} />
      <VoteForm tripPlanType={tripPlanType} roomId={roomId} onSearch={onSearch} onCalendar={onCalendar} />
      <SlideContainer hiddenRooms={hiddenRooms }/>
      <Button
        size="large"
        style={{
          marginTop: "1.25rem",
          backgroundColor: isValid ? "" : "#434343",
          cursor: isValid ? "pointer" : "not-allowed",
        }}
        disabled={!isValid}
        onClick={handleSubmit}
      >
        {"투표 공유하기"}
      </Button>
    </>
  );
}
