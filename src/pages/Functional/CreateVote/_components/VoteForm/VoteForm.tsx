import { useEffect } from "react";
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
  onSearch: () => void;
  selectedPlace: string;
}

export default function VoteForm({ tripPlanType, roomId, onCalendar, onSearch, selectedPlace }: VoteFormProps) {
  const { control, watch, setValue } = useVoteForm(tripPlanType, roomId);
  const isSchedule = tripPlanType === "SCHEDULE";
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  // ✅ 날짜 포맷팅 함수 (yyyy-mm-dd 형식)
  const formatDate = (date: string | null) => {
    if (!date) return "미정";
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  // ✅ 기간 계산 (n박)
  const nights = useMemo(() => {
    if (!startDate || !endDate) return "-";
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.max(0, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) - 1);
    return diff || 1; // 최소 1박 보장
  }, [startDate, endDate]);

  useEffect(() => {
    if (selectedPlace) {
      setValue("location", selectedPlace);
    }
  }, [selectedPlace, setValue]);

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
        <S.ClickableText onClick={() => onSearch()}>
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
                  value={field.value ? `${nights}박 / ${field.value}` : ""}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </Card.Item>
          <S.StyledDivider />
        </>
      )}

      {/* ✅ 기간 (n박) */}
      <Card.Item label="기간">
        {nights}박 ({formatDate(startDate)} ~ {formatDate(endDate)})
      </Card.Item>

      <S.StyledCardItem>
        {/* ✅ 날짜 (yyyy.mm.dd 형식) */}
        <span className="text">
          날짜 {formatDate(startDate)} ~ {formatDate(endDate)}
        </span>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}
