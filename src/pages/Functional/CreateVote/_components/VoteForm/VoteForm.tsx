import { useEffect, useMemo } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";
import VoteTimes from "./VoteTimes";
import { useVoteFormContext } from "../../context/VoteFormContext/VoteFormProvider";
import { Controller } from "react-hook-form";

interface VoteFormProps {
  tripPlanType: "VOTE" | "COURSE"; // ✅ tripPlanType을 props로 받음
  onCalendar: () => void;
  onSearch: (callback: (selectedPlaceName: string) => void) => void;
}

export default function VoteForm({ tripPlanType, onCalendar, onSearch }: VoteFormProps) {
  const { form } = useVoteFormContext();
  const { control, setValue, watch, reset, getValues } = form;

  const isVote = useMemo(() => tripPlanType === "VOTE", [tripPlanType]);

  useEffect(() => {
    if (tripPlanType === "VOTE") {
      reset({
        ...getValues(),
        tripPlanType: "VOTE",
        price: getValues("price") || "",
        voteLimitTime: getValues("voteLimitTime") || "",
      });
    } else {
      reset({
        ...getValues(),
        tripPlanType: "COURSE",
      });
    }
  }, [tripPlanType, reset, getValues]);

  return (
    <Card>
      {/* ✅ tripPlanType을 ImagePlaceholder에 전달 */}
      <ImagePlaceholder control={control} tripPlanType={tripPlanType} />

      {/* ✅ tripPlanType을 MessageInput에 전달 */}
      <MessageInput control={control} tripPlanType={tripPlanType} />

      <S.StyledDivider />

      {isVote && (
        <>
          <Card.Item label="투표 제한 시간">
            <Controller
              name="voteLimitTime"
              control={control}
              render={({ field }) => (
                <VoteTimes value={field.value} onChange={field.onChange} />
              )}
            />
          </Card.Item>
          <S.StyledDivider />
        </>
      )}

      <Card.Item label="장소">
        <S.ClickableText onClick={() => onSearch((place) => setValue("location", place))}>
          {watch("location") || "장소를 입력하세요."}
        </S.ClickableText>
      </Card.Item>

      <S.StyledDivider />

      {isVote && (
        <>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Card.Item label="가격">
                <S.Input type="text" placeholder="예) 1박 / 20만원" {...field} />
              </Card.Item>
            )}
          />
          <S.StyledDivider />
        </>
      )}

      <Card.Item label="기간">
        최소 {watch("minDays") ?? getValues("minDays")}박 ~ 최대 {watch("maxDays") ?? getValues("maxDays")}박
      </Card.Item>

      <S.StyledCardItem>
        <span className="text">
          날짜 {watch("startDate") ?? getValues("startDate")} ~ {watch("endDate") ?? getValues("endDate")}
        </span>
        <S.IconWrapper onClick={onCalendar} className="icon">
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledCardItem>
    </Card>
  );
}
