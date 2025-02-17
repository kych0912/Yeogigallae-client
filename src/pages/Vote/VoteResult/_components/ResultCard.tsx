import { useState, useEffect } from "react";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import * as S from "../../_components/Vote.styles";
import { Button } from "../../../../components/Button";
import Card from "../../../../components/Card";
import { theme } from "../../../../styles/theme";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import DurationInfo from "./DurationInfo";
import VoteComponent from "./VoteComponent";
import VoteContent from "./VoteContent";
import ResultSkeleton from "./SkeletonResult/SkeletonResult";
import { DEFAULT_TripInfo } from "../../../../apis/vote/mocks/tripInfoMocks";

export default function ResultCard({
  step,
  type,
  onNext,
  userId, // userId를 props로 추가
}: {
  step: "결과" | "찬성확인" | "반대확인";
  type: "찬성" | "반대";
  onNext: () => void;
  userId: number; // 추가된 props의 타입 정의
}) {
  const { tripInfo: fetchedTripInfo } = useTripInfoContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  const tripInfo = fetchedTripInfo?.result ?? DEFAULT_TripInfo.result;

  if (loading) {
    return <ResultSkeleton />;
  }

  return (
    <Card>
      <VoteContent voteData={tripInfo} />
      <DurationInfo />
      <VoteComponent step={step} userId={userId} />

      <Card.Divider />

      <Card.Image>
        <S.Image src={tripInfo?.imageUrl} alt="투표 이미지" />
      </Card.Image>

      <S.StyledCardTitle>{tripInfo?.description}</S.StyledCardTitle>

      <Card.Divider />

      <S.CustomWrapper>
        <S.CustomCardItem label="장소">
          <span>{tripInfo?.customLocation || "정보 없음"}</span> <br />
          <span>{tripInfo?.location || "주소 정보 없음"}</span>
        </S.CustomCardItem>
        <S.IconWrapper onClick={() => navigator.clipboard.writeText(tripInfo?.customLocation || "정보 없음")}>
          <LinkIcon />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">{tripInfo?.price || "가격 미정"}</Card.Item>

      <Button
        size="large"
        style={{
          backgroundColor: "#434343",
          color: "white",
          marginTop: "0.75rem",
          fontFamily: theme.fontFamily.medium,
        }}
        onClick={onNext}
      >
        {type === "반대" ? "홈으로" : "다시 투표하러 가기"}
      </Button>
    </Card>
  );
}
