import { VoteProvider, useVoteContext } from "../../context/VoteResultContext";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";

export default function VoteResult({
  type,
  onNext,
}: {
  type: "찬성" | "반대";
  onNext: () => void;
}) {
  return (
    <VoteProvider>
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
  const { tripInfo } = useTripInfoContext();
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: tripInfo.roomName,
        number: tripInfo.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  if (!voteResult || !tripInfo) return <p>로딩 중...</p>;

  return (
    <>
      <ResultCard step={step} onNext={onNext} />
      <S.Content>
        {tripInfo.userName || "정보 없음"}님이 여행 투표를 올렸습니다. <br />
        48시간 이후 종료됩니다.
      </S.Content>
    </>
  );
}
