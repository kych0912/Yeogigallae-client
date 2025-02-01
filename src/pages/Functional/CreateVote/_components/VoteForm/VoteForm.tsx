import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";
import VoteTimes from "./VoteTimes";
import { useTripPlanStore } from "../../../../../store/functionalStore/useTripPlanStore"; // POST 
import { useTripDetailStore } from "../../../../../store/functionalStore/useTripDetailStore"; // GET 

export default function VoteForm({
  onCalendar,
  onSearch,
  isVote,
  messageValue,
  onMessageChange,
  selectedTime,
  onTimeChange,
  selectedLocation,
}: {
  onCalendar: () => void;
  onSearch: () => void;
  isVote: boolean;
  messageValue: string;
  onMessageChange: (value: string) => void;
  selectedTime: string | null; 
  onTimeChange: (time: string) => void; 
  selectedLocation?: string | null;
}) {
  const { tripPlan } = useTripPlanStore();
  const { tripPlanDetails } = useTripDetailStore(); 


  const activeTripPlan = tripPlanDetails ?? tripPlan;

  return (
    <Card>
      <ImagePlaceholder />

      <MessageInput value={messageValue} onChange={onMessageChange} />

      <S.StyledDivider />

      <S.CustomCardItem label="투표 제한 시간">
        <VoteTimes selectedTime={selectedTime} onTimeChange={onTimeChange} />
      </S.CustomCardItem>

      <S.StyledDivider />

      <Card.Item label="장소">
        <S.ClickableText onClick={onSearch}>
          {activeTripPlan?.result.location || "장소를 입력하세요."} 
        </S.ClickableText>
      </Card.Item>

      <S.StyledDivider />

      {isVote && (
        <>
          <Card.Item label="가격">
            <S.Input type="text" placeholder={activeTripPlan?.result.price || "예) 1박 / 20만원"} />
          </Card.Item>
          <S.StyledDivider />
        </>
      )}

      <Card.Item label="기간">
        최소 {activeTripPlan?.result.minDays || 0}박 ~ 최대 {activeTripPlan?.result.maxDays || 0}박
      </Card.Item>

      <S.StyledCardItem>
        <span className="text">
          날짜 {activeTripPlan?.result.startDate || "0000.00.00"} ~ {activeTripPlan?.result.endData || "0000.00.00"}
        </span>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}


