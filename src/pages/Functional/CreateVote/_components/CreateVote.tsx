import { useState, useEffect, useMemo } from "react";
import { useVoteFormContext } from "../../context/VoteFormContext";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import { Button } from "../../../../components/Button";
import { useVoteFormMutation } from "../../../../react-query/mutation/functional/useVoteFormMutation";
import { useVoteForm } from "../../../../hooks/useForm/useVoteForm";
import { Toast } from "../../../../components/Calendar/CompleteButton.styles";

export default function CreateVoteContent({
  onCalendar,
  onSearch,
}: {
  onCalendar: () => void;
  onSearch: () => void;
}) {
  const { tripPlanType, setTripPlanType, roomId } = useVoteFormContext();
  const { getValues, watch } = useVoteForm(tripPlanType, roomId);
  const voteMutation = useVoteFormMutation();

  const [toastMessage, setToastMessage] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  // ✅ 현재 tripPlanType에 맞는 message 필드만 감지하도록 수정!
  const message = useMemo(() => {
    if (tripPlanType === "COURSE") {
      return watch("courseDetails.message")?.trim() || "";
    } else {
      return watch("scheduleDetails.message")?.trim() || "";
    }
  }, [watch, tripPlanType]);

  // ✅ 필수 입력 필드 감지
  const imageUrl = watch("imageUrl");
  const voteLimitTime = watch("voteLimitTime");
  const location = watch("location");
  const price = tripPlanType === "SCHEDULE" ? watch("scheduleDetails.price") : "VALID"; 
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  // ✅ 필수 입력값이 모두 입력되었는지 확인
  useEffect(() => {
    const allFieldsFilled =
      !!imageUrl && !!voteLimitTime && !!location && !!price && !!startDate && !!endDate && message.length > 0; 
    setIsButtonDisabled(!allFieldsFilled);
  }, [imageUrl, voteLimitTime, location, price, startDate, endDate, message]); 

  const handleSubmit = () => {
    const values = getValues();

    if (!values.imageUrl) {
      setToastMessage("이미지를 선택해주세요!");
      return;
    }
    if (!values.voteLimitTime) {
      setToastMessage("투표 제한 시간을 설정해주세요!");
      return;
    }
    if (!values.location) {
      setToastMessage("장소를 입력해주세요!");
      return;
    }
    if (tripPlanType === "SCHEDULE" && !values.scheduleDetails?.price) {
      setToastMessage("가격을 입력해주세요!");
      return;
    }
    if (!values.startDate || !values.endDate) {
      setToastMessage("날짜를 선택해주세요!");
      return;
    }
    if (message.length === 0) {
      setToastMessage("메시지를 입력해주세요!");
      return;
    }

    voteMutation.mutate(values);
  };

  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={setTripPlanType} />
      <VoteForm tripPlanType={tripPlanType} roomId={roomId} onSearch={onSearch} onCalendar={onCalendar} />
      <SlideContainer />
      {toastMessage && <Toast>{toastMessage}</Toast>}

      <Button size="large"
        style={{
          marginTop: "1.25rem",
          backgroundColor: isButtonDisabled ? "#434343" : "", 
          cursor: isButtonDisabled ? "not-allowed" : "pointer",
        }}
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        {"투표 공유하기"}
      </Button>
    </>
  );
}
