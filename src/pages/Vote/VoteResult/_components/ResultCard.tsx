import { useEffect } from "react";
import { useVoteResultQuery } from "../../../../react-query/queries/useVoteResultQuerie";
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
  tripId,  // ✅ tripId를 props로 받도록 수정
  step,
  onNext,
}: {
  tripId: number;
  step: "결과" | "찬성확인" | "반대확인";
  onNext: () => void;
}) {
  const { data, isLoading, error } = useVoteResultQuery(tripId); // ✅ tripId 전달

  useEffect(() => {
    if (data) {
      console.log("✅ 투표 결과 받아옴:", data);
    }
  }, [data]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  const voteData = data?.result;
  if (!voteData) return <div>데이터가 없습니다.</div>;

  return (
    <Card>
        <VoteContent voteData={voteData} />
        <DurationInfo />
        <VoteComponent step={step} voteData={voteData} /> 

        <Card.Divider />

        <Card.Image>
          <S.Image src={dummyData.imageSrc} alt="placeholder" />
        </Card.Image>

        <S.CustomWrapper>
          <S.CustomCardItem label="장소">
            <span>{dummyData.location.place}</span> <br />
            <span>{dummyData.location.address}</span>
          </S.CustomCardItem>
          <S.IconWrapper onClick={() => navigator.clipboard.writeText(dummyData.location.place)}>
            <LinkIcon />
          </S.IconWrapper>
        </S.CustomWrapper>

        <Card.Divider />
        <Card.Item label="금액">{dummyData.price}</Card.Item>

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
