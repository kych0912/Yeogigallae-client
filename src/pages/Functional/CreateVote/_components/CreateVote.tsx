import { useEffect, useState } from "react";
import { useVoteFormContext } from "../../context/VoteFormContext";
import Tabs from "./Tabs/Tabs";
import VoteForm from "./VoteForm/VoteForm";
import SlideContainer from "./SlideContainer/SlideContainer";
import { Button } from "../../../../components/Button";
import { useVoteFormMutation } from "../../../../react-query/mutation/functional/useVoteFormMutation";
import { useVoteForm } from "../../../../hooks/useForm/useVoteForm";
import { useOutletContext } from "react-router-dom";

export default function CreateVoteContent({
  onCalendar,
  onSearch,
}: {
  onCalendar: () => void;
  onSearch: () => void;
}) {
  const { tripPlanType, setTripPlanType, roomId } = useVoteFormContext();
  const { getValues, isValid } = useVoteForm(tripPlanType, roomId);
  const voteMutation = useVoteFormMutation();

  // ✅ 선택적 유효성 검사 적용 (기본값 false)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // ✅ 특정 조건을 만족할 때만 버튼 활성화
  useEffect(() => {
    const values = getValues();
    if (values.startDate && values.endDate) {
      setIsButtonEnabled(isValid);
    } else {
      setIsButtonEnabled(false);
    }
  }, [isValid, getValues]);

  // ✅ useOutletContext를 사용하여 setHeaderConfig 가져오기
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string }) => void }>();

  // ✅ 컴포넌트가 마운트될 때 "생성하기" 제목으로 설정
  useEffect(() => {
    setHeaderConfig({ title: "생성하기" });
  }, [setHeaderConfig]);

  return (
    <>
      <Tabs activeTab={tripPlanType} onTabChange={setTripPlanType} />
      <>
        <VoteForm
          tripPlanType={tripPlanType}
          roomId={roomId}
          onSearch={onSearch}
          onCalendar={onCalendar}
        />
        <SlideContainer />
        <Button
          size="large"
          style={{
            marginTop: "1.25rem",
            backgroundColor: isButtonEnabled ? "" : "#434343",
            cursor: isButtonEnabled ? "pointer" : "not-allowed",
          }}
          disabled={!isButtonEnabled}
          onClick={() => {
            if (isButtonEnabled) voteMutation.mutate(getValues());
          }}
        >
          {"투표 공유하기"}
        </Button>
      </>
    </>
  );
}
