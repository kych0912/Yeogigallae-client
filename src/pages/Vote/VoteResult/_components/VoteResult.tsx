import { useEffect } from "react";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useOutletContext } from "react-router-dom"; 
import { useVoteResultQuery } from "../../../../react-query/queries/vote/useVoteResultQuerie";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";
import { DEFAULT_TripInfo } from "../../../../apis/vote/mocks/tripInfoMocks"; 
import { DEFAULT_VoteResult } from "../../../../apis/vote/mocks/voteResultMocks"; 

export default function VoteResult({ tripId, onNext }: { tripId: number; onNext: () => void }) {
  const { tripInfo: fetchedTripInfo } = useTripInfoContext(); 
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();

  const { data: voteResult, isLoading, isError } = useVoteResultQuery(tripId);

  // ✅ API 요청 실패 시, 목데이터 사용
  const resolvedVoteResult = isError ? DEFAULT_VoteResult : voteResult;

  // ✅ tripInfo가 없으면 목데이터 사용
  const tripInfo = fetchedTripInfo?.result ?? DEFAULT_TripInfo.result;

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: tripInfo.roomName,
        number: tripInfo.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  if (isLoading) {
    return <p>⏳ 투표 결과 불러오는 중...</p>;
  }

  if (!resolvedVoteResult || !resolvedVoteResult.result.length) {
    return <p>⚠️ 투표 결과를 불러올 수 없습니다.</p>;
  }

  const currentUserId = resolvedVoteResult.result[2]?.userId ?? 0;
  const userVote = resolvedVoteResult.result.find((vote) => vote.userId === currentUserId); 
  const step = userVote?.type === "GOOD" ? "찬성확인" : "반대확인";

  return (
    <>
      <ResultCard 
        step={step} 
        type={userVote?.type === "GOOD" ? "찬성" : "반대"} 
        onNext={onNext} 
        userId={currentUserId} 
      />
      <S.Content>
        {tripInfo?.masterName || "정보 없음"}님이 여행 투표를 올렸습니다. <br />
      </S.Content>
    </>
  );
}
