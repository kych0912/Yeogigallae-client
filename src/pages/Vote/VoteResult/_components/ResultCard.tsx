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
import { useParams } from "react-router-dom";
import { VoteResultType, VoteResultItemType } from "../../context/vote/VoteResultTypes";

type ResultCardProps = {
  step: "결과" | "찬성확인" | "반대확인";
  type: "찬성" | "반대";
  onNext: () => void;
  voteResult: VoteResultType;
};

export default function ResultCard({
  step,
  type,
  onNext,
  voteResult,
}: ResultCardProps) {
  const { tripInfo } = useTripInfoContext();
  const { tripId } = useParams<{ tripId: string }>();
  const [loading, setLoading] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(delay);
  }, []);

  const handleAutoNavigation = () => {
    setIsButtonEnabled(true);
    onNext();
  };

  if (loading) return <ResultSkeleton />;
  if (!tripInfo || !tripId) return <p>⚠️ 여행 정보가 존재하지 않습니다.</p>;

  const userVote: VoteResultItemType | undefined = voteResult.result.find(
    (vote) => vote.userId === tripInfo?.masterId
  );

  return (
    <Card>
      <VoteContent
        voteData={{
          ...tripInfo,
          userName: userVote?.userName || "여행자", 
        }}
      />
      <DurationInfo />
      <VoteComponent
        step={step}
        tripId={parseInt(tripId, 10)}
        userId={userVote?.userId ?? 0}
      />
      <Card.Divider />

      <Card.Image>
        <S.Image src={tripInfo.imageUrl} alt="투표 이미지" />
      </Card.Image>
      <S.StyledCardTitle>{tripInfo.description}</S.StyledCardTitle>
      <Card.Divider />

      <S.CustomWrapper>
        <S.CustomCardItem label="장소">
          <span>{tripInfo.customLocation || "위치 정보"}</span> <br />
          <span>{tripInfo.location || "주소 정보 없음"}</span>
        </S.CustomCardItem>
        <S.IconWrapper
          onClick={() =>
            navigator.clipboard.writeText(
              tripInfo.customLocation || "정보 없음"
            )
          }
        >
          <LinkIcon />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">{tripInfo.price || "가격 미정"}</Card.Item>

      <Button
        size="large"
        style={{
          backgroundColor: isButtonEnabled ? "#3b46f1" : "#434343",
          color: "white",
          marginTop: "0.75rem",
          fontFamily: theme.fontFamily.medium,
          cursor: isButtonEnabled ? "pointer" : "not-allowed",
        }}
        onClick={handleAutoNavigation}
        disabled={!isButtonEnabled}
      >
        {type === "반대" ? "홈으로" : "다시 투표하러 가기"}
      </Button>
    </Card>
  );
}
