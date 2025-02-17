import { useEffect } from "react";
import { useVoteForm } from "../../../../../hooks/useForm/useVoteForm";
import { Controller, useWatch } from "react-hook-form";
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
  const { control, setValue, getValues } = useVoteForm(tripPlanType, roomId);
  const { selectedPlace } = useSearch();
  const isSchedule = tripPlanType === "SCHEDULE";
  const startDate = useWatch({ control, name: "startDate" }) || "미정";
  const endDate = useWatch({ control, name: "endDate" }) || "미정";
  const location = useWatch({ control, name: "location" }) || "";

  const nights = (() => {
    if (!startDate || !endDate || startDate === "미정" || endDate === "미정") return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.max(1, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) - 1);
  })();

  useEffect(() => {
    if (selectedPlace) {
      setValue("location", selectedPlace.place_name || "");
    }
  }, [selectedPlace, setValue]);

  useEffect(() => {
    const formData = getValues();
    localStorage.setItem(`voteForm_${tripPlanType}_${roomId}`, JSON.stringify(formData));
  }, [startDate, endDate, location]);

  return (
    <Card>
      <ImagePlaceholder control={control} tripPlanType={tripPlanType} roomId={roomId} />
      <MessageInput control={control} tripPlanType={tripPlanType} roomId={roomId} />
      <S.StyledDivider />

      <Card.Item label="투표 제한 시간">
        <Controller
          name="voteLimitTime" control={control}
          render={({ field }) => <VoteTimes {...field} control={control} />}
        />
      </Card.Item>
      <S.StyledDivider />

      <Card.Item label="장소">
        <Controller
          name="location" control={control}
          render={({ field }) => (
            <SkeletonForm fullwidth>
              <S.ClickableText onClick={onSearch}>{field.value || "장소를 입력하세요."}</S.ClickableText>
            </SkeletonForm>
          )}
        />
      </Card.Item>
      <S.StyledDivider />

      {isSchedule && (
        <Card.Item label="가격">
          <Controller
            name="scheduleDetails.price" control={control}
            render={({ field }) => <PriceInput field={field} nights={nights} />}
          />
        </Card.Item>
      )}


      <S.StyledCardItem>
        <SkeletonForm fullwidth>
          <span className="text">날짜 {startDate} ~ {endDate}</span>
        </SkeletonForm>
        <S.IconWrapper onClick={onCalendar}>
          <SkeletonForm>
            <CalendarIcon />
          </SkeletonForm>
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}
