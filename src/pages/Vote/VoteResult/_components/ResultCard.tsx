import { useEffect } from "react";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import * as S from "../../_components/Vote.styles";
import { Button } from "../../../../components/Button";
import Card from "../../../../components/Card";
import { theme } from "../../../../styles/theme"; 
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import DurationInfo from "./DurationInfo";
import VoteComponent from "./VoteComponent"; 
import VoteContent from "./VoteContent";

const DEFAULT_IMAGE_URL = "https://via.placeholder.com/150"; 

export default function ResultCard({
  step,
  onNext,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  onNext: () => void;
}) {
  const { tripInfo } = useTripInfoContext();

  useEffect(() => {
    console.log(tripInfo);
  }, [tripInfo]);

  if (!tripInfo) {
    return <p>⏳ 여행 정보를 불러오는 중...</p>;
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
          {"투표하러 가기"}
        </Button>
    </Card>
  );
}
