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

const DEFAULT_IMAGE_URL = "https://via.placeholder.com/150"; 

export default function ResultCard({
  step,
  type,
  onNext,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  type: "찬성" | "반대";
  onNext: () => void;
}) {
  const { tripInfo } = useTripInfoContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  if (loading) {
    return <ResultSkeleton />; 
  }

  if (!tripInfo) {
    return <p>⏳ 여행 정보를 불러올 수 없습니다.</p>;
  }

  return (
    <Card>
        <VoteContent voteData={tripInfo} />
        <DurationInfo />
        <VoteComponent step={step} /> 

        <Card.Divider />

        <Card.Image>
          <S.Image src={tripInfo.imageUrl || DEFAULT_IMAGE_URL} alt="투표 이미지" />
        </Card.Image>

        <S.StyledCardTitle>{tripInfo.description}</S.StyledCardTitle>

        <Card.Divider />

        <S.CustomWrapper>
          <S.CustomCardItem label="장소">
            <span>{tripInfo.customLocation}</span> <br />
            <span>{tripInfo.location}</span>
          </S.CustomCardItem>
          <S.IconWrapper onClick={() => navigator.clipboard.writeText(tripInfo.customLocation)}> 
            <LinkIcon />
          </S.IconWrapper>
        </S.CustomWrapper>

        <Card.Divider />
        <Card.Item label="금액">{tripInfo.price}</Card.Item>

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
