import { useEffect, useMemo } from "react";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { Controller } from "react-hook-form";
import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import SkeletonForm from "./Skeleton/SkeletonForm";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";
import VoteTimes from "./VoteTimes";
import PriceInput from "./PriceInput";
import { useSearch } from "../../../context/SearchContext";

interface VoteFormProps {
  tripPlanType: "COURSE" | "SCHEDULE";
  roomId: number;
  onCalendar: () => void;
  onSearch: () => void;
}

export default function VoteForm({ tripPlanType, roomId, onCalendar, onSearch }: VoteFormProps) {
  const { control, watch, setValue } = useVoteForm(tripPlanType, roomId);
  const { selectedPlace } = useSearch();
  const isSchedule = tripPlanType === "SCHEDULE";

  useEffect(() => {
    if (selectedPlace) {
      setValue("location", selectedPlace.place_name || "");
    }
  }, [selectedPlace, setValue]);

  const startDate = useMemo(() => watch("startDate") || "미정", [watch("startDate")]);
  const endDate = useMemo(() => watch("endDate") || "미정", [watch("endDate")]);

  const nights = useMemo(() => {
    if (!startDate || !endDate || startDate === "미정" || endDate === "미정") return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.max(1, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) - 1);
  }, [startDate, endDate]);

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
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <SkeletonForm fullwidth>
              <S.ClickableText onClick={onSearch}>
                {field.value || "장소를 입력하세요."}
              </S.ClickableText>
            </SkeletonForm>
          )}
        />
      </Card.Item>

      <S.StyledDivider />

      {isSchedule && (
        <>
          <Card.Item label="가격">
            <SkeletonForm fullwidth>
              <PriceInput control={control} nights={nights} />
            </SkeletonForm>
          </Card.Item>
          <S.StyledDivider />
        </>
      )}

      <S.StyledCardItem>
        <SkeletonForm fullwidth>
          <span className="text">
            날짜 {startDate} ~ {endDate}
          </span>
        </SkeletonForm>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <SkeletonForm>
            <CalendarIcon />
          </SkeletonForm>
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}
