import { VoteProvider, useVoteContext } from "../../context/VoteResultContext";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";

export default function VoteResult({
  tripId,
  type,
  onNext,
}: {
  tripId: number;
  type: "찬성" | "반대";
  onNext: () => void;
}) {
  return (
    <VoteProvider tripId={tripId}>
      <VoteResultContent type={type} onNext={onNext} />
    </VoteProvider>
  );
}

function VoteResultContent({
  type,
  onNext,
}: {
  type: "찬성" | "반대";
  onNext: () => void;
}) {
  const step = type === "찬성" ? "찬성확인" : "반대확인";
  const { state } = useVoteContext();
  const { voteResult } = state;

  if (!voteResult) return <p>로딩 중...</p>;

  return (
    <>
      <ResultCard step={step} onNext={onNext} />
      <S.Content>
        {voteResult.result?.userName || "알 수 없음"}님이 여행 투표를 올렸습니다. <br />
        48시간 이후 종료됩니다.
      </S.Content>
    </>
  );
}
