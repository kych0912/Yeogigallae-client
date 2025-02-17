import { useEffect, useState } from "react";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useOutletContext } from "react-router-dom"; 
import { useVoteResultQuery } from "../../../../react-query/queries/vote/useVoteResultQuerie";
import { useVoteResultMutation } from "../../../../react-query/mutation/vote/useVoteMutation";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";
import { DEFAULT_TripInfo } from "../../../../apis/vote/mocks/tripInfoMocks"; 
import { DEFAULT_VoteResult } from "../../../../apis/vote/mocks/voteResultMocks"; 
import { VoteData } from "../../context/vote/VoteSchema";

export default function VoteResult({ tripId, roomId, onNext }: { tripId: number; roomId: number; onNext: () => void }) {
  const { tripInfo: fetchedTripInfo } = useTripInfoContext(); 
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();
  const { data: voteResult, isLoading, isError } = useVoteResultQuery(tripId);
  const { mutate: postVoteResult } = useVoteResultMutation();

  const [voteLimitMinutes, setVoteLimitMinutes] = useState<number>(2880);
  const [shouldHideResults] = useState<boolean>(false);
  const [hasPosted, setHasPosted] = useState<boolean>(false);

  const resolvedVoteResult = voteResult ?? DEFAULT_VoteResult;
  const tripInfo = fetchedTripInfo?.result ?? DEFAULT_TripInfo.result;

  useEffect(() => {
    setHeaderConfig({
      title: tripInfo.roomName,
      number: tripInfo.userCount,
    });
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
    setVoteLimitMinutes(timeMapping[tripInfo.voteLimitTime] || 2880);
  }, [tripInfo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPosted) {
        const voteData: VoteData = {
          tripId,
          voteRoomId: roomId,
          type: "END",
        };
  
        postVoteResult(voteData);
        setHasPosted(true);
      }
    }, voteLimitMinutes * 60 * 1000);
    
    return () => clearTimeout(timer);
  }, [voteLimitMinutes, hasPosted, tripId, roomId, postVoteResult]);
  

  if (isLoading) return <p>⏳ 투표 결과 불러오는 중...</p>;
  if (isError || !resolvedVoteResult?.result.length) return <p>⚠️ 투표 결과를 불러올 수 없습니다.</p>;
  if (shouldHideResults) return null;

  const currentUserId = resolvedVoteResult.result[2]?.userId ?? 0;
  const userVote = resolvedVoteResult.result.find((vote) => vote.userId === currentUserId); 
  const step = userVote?.type === "GOOD" ? "찬성확인" : "반대확인";

  const hours = Math.floor(voteLimitMinutes / 60);
  const minutes = voteLimitMinutes % 60;
  const formattedTime = hours > 0 ? `${hours}시간 ${minutes > 0 ? `${minutes}분` : ""} 후 투표가 종료됩니다.` : `${minutes}분 후 투표가 종료됩니다.`;

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
        {formattedTime}
      </S.Content>
    </>
  );
}
