import Card from "../../../../components/Card";
import { Button } from "../../../../components/Button";
import { voteData } from "../../voteData";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import DurationInfo from "./DurationInfo";
import * as S from "../../_components/Vote.styles";
import VoteComponent from "./VoteComponent";
import VoteContent from "./VoteContent";

export default function ResultCard({
  step,
  onNext,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  onNext: () => void;
}) {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  return (
    <S.StyledCard>
        <VoteContent />
        <DurationInfo />
        <VoteComponent step={step}/>

        <Card.Divider />

        <Card.Image>
          <S.Image src={voteData.imageSrc} alt="placeholder" />
        </Card.Image>

        <Card.Item label="장소">
          <S.TruncatedText>{voteData.location}</S.TruncatedText>
        </Card.Item>
        <S.IconWrapper onClick={() => handleCopyToClipboard(voteData.location)}>
          <LinkIcon />
        </S.IconWrapper>

        <Card.Divider />
        <Card.Item label="금액">{voteData.price}</Card.Item>

        <Button
          size="large"
          style={{
            backgroundColor: "#434343",
            color: "white",
            marginTop: "0.75rem",
          }}
          onClick={onNext}
        >
          {"투표하러 가기"}
        </Button>
    </S.StyledCard>
  );
}
