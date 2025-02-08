import { VoteProvider, useVoteContext } from "../../context/VoteResultContext";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";

export default function VoteResult({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <VoteProvider>
      <VoteResultContent onNext={onNext} />
    </VoteProvider>
  );
}

function VoteResultContent({
  onNext,
}: {
  onNext: () => void;
}) {
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

  if (!voteResult) {
    return <p>⏳ 로딩 중...</p>;
  }

  const step = voteResult.type === "GOOD" ? "찬성확인" : "반대확인";

  const timeMapping: Record<string, number> = {
    THIRTY_MINUTES: 30,
    ONE_HOUR: 60,
    TWO_HOURS: 120,
    TWELVE_HOURS: 720,
    ONE_DAY: 1440,
    TWO_DAYS: 2880,
  };

  const voteLimitMinutes = timeMapping[tripInfo?.voteLimitTime || "TWO_DAYS"] || 2880;

  const hours = Math.floor(voteLimitMinutes / 60);
  const minutes = voteLimitMinutes % 60;
  const formattedTime = hours > 0 
    ? `${hours}시간 ${minutes > 0 ? `${minutes}분` : ""}`
    : `${minutes}분`;

  useEffect(() => {
    if (voteLimitMinutes > 0) {
      const timer = setTimeout(() => {
        onNext();
      }, voteLimitMinutes * 60 * 1000); 

      return () => clearTimeout(timer); 
    }
  }, [voteLimitMinutes, onNext]);

  return (
    <>
      <ResultCard step={step} onNext={onNext} />
      <S.Content>
        {tripInfo?.masterName || "정보 없음"}님이 여행 투표를 올렸습니다. <br />
        {formattedTime} 후 종료됩니다.
      </S.Content>
    </>
  );
}
