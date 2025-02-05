import { useEffect } from "react";
import { useVoteContext } from "../../context/VoteResultContext"; 
import * as S from "../../_components/Vote.styles";
import { Button } from "../../../../components/Button";
import Card from "../../../../components/Card";
import { theme } from "../../../../styles/theme"; 
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import DurationInfo from "./DurationInfo";
import VoteComponent from "./VoteComponent"; 
import VoteContent from "./VoteContent";
import { dummyData } from "../../dummyData";

export default function ResultCard({
  step,
  onNext,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  onNext: () => void;
}) {
  const { state } = useVoteContext();
  const { voteResult } = state;

  useEffect(() => {
    if (voteResult) {
      console.log("✅ 투표 결과 받아옴:", voteResult);
    }
  }, [voteResult]);

  if (!voteResult) return <p>로딩 중...</p>;

  const { result } = voteResult;
  if (!result) return <div>데이터가 없습니다.</div>;

  return (
    <Card>
        <VoteContent voteData={result} />
        <DurationInfo />
        <VoteComponent step={step} voteData={result} /> 

        <Card.Divider />

        <Card.Image>
          <S.Image src={dummyData.imageSrc || "https://via.placeholder.com/150"} alt="투표 이미지" />
        </Card.Image>

        <S.CustomWrapper>
          <S.CustomCardItem label="장소">
            <span>{dummyData.location.place || "장소 정보 없음"}</span> <br />
            <span>{dummyData.location.address || "주소 정보 없음"}</span>
          </S.CustomCardItem>
          <S.IconWrapper onClick={() => navigator.clipboard.writeText(dummyData.location?.place || "")}> 
            <LinkIcon />
          </S.IconWrapper>
        </S.CustomWrapper>

        <Card.Divider />
        <Card.Item label="금액">{dummyData.price || "가격 정보 없음"}</Card.Item>

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
