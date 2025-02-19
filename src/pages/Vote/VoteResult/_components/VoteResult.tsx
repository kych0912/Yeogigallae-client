import { useEffect, useState } from "react";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useOutletContext } from "react-router-dom";
import { useVoteResultQuery } from "../../../../react-query/queries/vote/useVoteResultQuerie";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";
import { VoteResultSchema, VoteResultType } from "../../context/vote/VoteResultSchema";

export default function VoteResult({
  tripId,
  onNext,
}: {
  tripId: number;
  roomId: number;
  onNext: () => void;
}) {
  const { tripInfo, isLoading: tripLoading } = useTripInfoContext();
  const { setHeaderConfig } = useOutletContext<{
    setHeaderConfig: (config: { title: string; number?: number }) => void;
  }>();
  const { data: voteResult, isFetching } = useVoteResultQuery(tripId);
  const [voteLimitMinutes, setVoteLimitMinutes] = useState<number>(2880);
  const [networkSyncing] = useState<boolean>(true);

  const resolvedVoteResult: VoteResultType = VoteResultSchema.parse(
    voteResult ?? { httpStatus: "", code: "", message: "", result: [] }
  );

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: tripInfo.roomName,
        number: tripInfo.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  useEffect(() => {
    const timeMapping: Record<string, number> = {
      THIRTY_MINUTES: 30,
      ONE_HOUR: 60,
      TWO_HOURS: 120,
      FOUR_HOURS: 240,
      SIX_HOURS: 360,
      TWO_DAYS: 2880,
    };
    if (tripInfo?.voteLimitTime) {
      setVoteLimitMinutes(timeMapping[tripInfo.voteLimitTime] || 2880);
    }
  }, [tripInfo?.voteLimitTime]);

  if (tripLoading || isFetching || networkSyncing)
    return <p>🔄 네트워크 연결 확인 중... 데이터 동기화 중입니다.</p>;

  const userVote = resolvedVoteResult.result.find(
    (vote) => vote.userId === tripInfo?.masterId
  );
  const step = userVote?.type === "GOOD" ? "찬성확인" : "반대확인";

  const hours = Math.floor(voteLimitMinutes / 60);
  const minutes = voteLimitMinutes % 60;
  const formattedTime =
    hours > 0
      ? `${hours}시간 ${minutes > 0 ? `${minutes}분` : ""} 후 투표가 종료됩니다.`
      : `${minutes}분 후 투표가 종료됩니다.`;

  return (
    <>
      <ResultCard
        step={step}
        type={userVote?.type === "GOOD" ? "찬성" : "반대"}
        onNext={onNext}
        userId={userVote?.userId ?? 0}
      />
      <S.Content>
        {tripInfo?.masterName || "정보 없음"}님이 여행 투표를 올렸습니다. <br />
        {formattedTime}
      </S.Content>
    </>
  );
}
