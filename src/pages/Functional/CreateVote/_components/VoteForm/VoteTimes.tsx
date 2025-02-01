import * as S from "../../../_components/Functional.styles";
import { useTripPlanStore } from "../../../../../store/functionalStore/useTripPlanStore";

export default function VoteTimes({
  selectedTime,
  onTimeChange,
}: {
  selectedTime: string | null;
  onTimeChange: (time: string) => void;
}) {
  const { tripPlan } = useTripPlanStore(); // ✅ Zustand에서 `tripPlan` 상태 가져오기

  const voteTimeMapping: Record<string, string> = {
    "THIRTY_MINUTES": "30분",
    "SIXTY_MINUTES": "60분",
    "TWO_HOURS": "2시간",
    "FOUR_HOURS": "4시간",
    "SIX_HOURS": "6시간",
  };

  const defaultSelectedTime = selectedTime || voteTimeMapping[tripPlan?.result.voteLimitTime || ""] || "30분";

  const timeOptions = ["30분", "60분", "2시간", "4시간", "6시간"];

  return (
    <S.ButtonContainer>
      {timeOptions.map((time) => (
        <S.TimeButton
          key={time}
          $isActive={defaultSelectedTime === time} // ✅ 서버 데이터 반영
          onClick={() => onTimeChange(time)}
        >
          {time}
        </S.TimeButton>
      ))}
    </S.ButtonContainer>
  );
}
