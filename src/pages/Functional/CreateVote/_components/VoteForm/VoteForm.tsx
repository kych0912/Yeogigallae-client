import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { Controller } from "react-hook-form";
import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";
import VoteTimes from "./VoteTimes";
import { useMemo } from "react";

interface VoteFormProps {
  tripPlanType: "COURSE" | "SCHEDULE";
  roomId: number;
  onCalendar: () => void;
  onSearch: (callback: (selectedPlaceName: string) => void) => void;
}

export default function VoteForm({ tripPlanType, roomId, onCalendar, onSearch }: VoteFormProps) {
  const { control, setValue, watch } = useVoteForm(tripPlanType, roomId);
  const isSchedule = tripPlanType === "SCHEDULE";

  const minDays = watch("minDays") || 1;
  const maxDays = watch("maxDays") || 7;

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const nights = useMemo(() => {
    if (!startDate || !endDate) return "-";
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.max(0, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) - 1);
    return diff || 1; 
  }, [startDate, endDate]);

  const formatPrice = (price: string) => {
    if (!price) return "";
    const num = parseInt(price.replace(/\D/g, ""), 10);
    if (isNaN(num)) return "";

    if (num >= 10000) {
      const man = Math.floor(num / 10000);
      const remain = num % 10000;
      return remain > 0 ? `${man}만 ${remain.toLocaleString()}원` : `${man}만원`;
    }
    return `${num.toLocaleString()}원`;
  };

  return (
    <Card>
      <ImagePlaceholder control={control} tripPlanType={tripPlanType} roomId={roomId} />
      <MessageInput control={control} tripPlanType={tripPlanType} roomId={roomId} />
      <S.StyledDivider />

      <Card.Item label="투표 제한 시간">
        <Controller
          name="voteLimitTime"
          control={control}
          render={({ field }) => <VoteTimes value={field.value} onChange={field.onChange} />}
        />
      </Card.Item>
      <S.StyledDivider />

      <Card.Item label="장소">
        <S.ClickableText onClick={() => onSearch((place) => setValue("location", place))}>
          {watch("location") || "장소를 입력하세요."}
        </S.ClickableText>
      </Card.Item>
      <S.StyledDivider />

      {isSchedule && (
        <>
          <Card.Item label="가격">
            <Controller
              name="scheduleDetails.price"
              control={control}
              render={({ field }) => (
                <S.Input
                  type="text"
                  placeholder={`${nights}박 / 20만원`}
                  value={field.value ? `${nights}박 / ${formatPrice(field.value)}` : ""}
                  onChange={(e) => {
                    const priceValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력 가능
                    field.onChange(priceValue);
                  }}
                />
              )}
            />
          </Card.Item>
          <S.StyledDivider />
        </>
      )}

      <Card.Item label="기간">
        최소 {minDays-1}박 ~ 최대 {maxDays-1}박
      </Card.Item>

      <S.StyledCardItem>
        <span className="text">
          날짜 {startDate || "미정"}~{endDate || "미정"}
        </span>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}
