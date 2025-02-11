import { useEffect, useMemo } from "react";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { Controller } from "react-hook-form";
import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";
import VoteTimes from "./VoteTimes";

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

  const nights = useMemo(() => {
    if (!startDate || !endDate) return 1;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.max(1, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) - 1);
    return diff;
  }, [startDate, endDate]);

  useEffect(() => {
    if (selectedPlace) {
      setValue("location", selectedPlace);
    }
  }, [selectedPlace, setValue]);

  const formatPrice = (price?: number) => {
    if (!price || price === 0) return "20만원";
    const mainUnit = Math.floor(price / 10000);
    const subUnit = price % 10000;
    return subUnit === 0 ? `${mainUnit}만 원` : `${mainUnit}만 ${subUnit}원`;
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
        <S.ClickableText onClick={onSearch}>{watch("location") || "장소를 입력하세요."}</S.ClickableText>
      </Card.Item>
      <S.StyledDivider />

      {isSchedule && (
        <>
          <Card.Item label="가격">
            <Controller
              name="scheduleDetails.price"
              control={control}
              render={({ field }) => {
                let priceValue = field.value ? field.value.replace(/\D/g, "") : "";
                let priceNumber = priceValue ? parseInt(priceValue, 10) : 0;

                if (priceNumber > 10000000 || priceValue.length > 8) {
                  priceNumber = 10000000;
                }

                return (
                  <S.Input
                    type="text"
                    placeholder={`${nights}박 / 20만원`}
                    value={field.value || ""}
                    onChange={(e) => {
                      let newValue = e.target.value.replace(/\D/g, "").slice(0, 7);
                      field.onChange(newValue);
                    }}
                    onBlur={() => {
                      if (field.value) {
                        let parsedValue = parseInt(field.value, 10) || 0;
                        field.onChange(`${nights}박 / ${formatPrice(parsedValue)}`);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace") {
                        let newValue = field.value ? field.value.slice(0, -1) : "";
                        field.onChange(newValue);
                      }
                    }}
                  />
                );
              }}
            />
          </Card.Item>

          <S.StyledDivider />
        </>
      )}

      <S.StyledCardItem>
        <span className="text">날짜 {startDate || "미정"} ~ {endDate || "미정"}</span>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}
