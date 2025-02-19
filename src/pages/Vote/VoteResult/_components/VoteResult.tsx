import { useEffect, useState } from "react";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useOutletContext, useParams } from "react-router-dom";
import { useVoteResultQuery } from "../../../../react-query/queries/vote/useVoteResultQuerie";
import { usePostVoteResultMutation } from "../../../../react-query/mutation/vote/useVoteMutation";
import ResultCard from "./ResultCard";
import * as S from "../../_components/Vote.styles";
import { VoteResultType } from "../../context/vote/VoteResultTypes";

export default function VoteResult({
  onNext,
}: {
  onNext: () => void;
}) {
  const { tripId, roomId } = useParams<{ tripId: string; roomId: string }>();
  const parsedTripId = tripId ? parseInt(tripId, 10) : 0;
  const parsedRoomId = roomId ? parseInt(roomId, 10) : 0;

  const { tripInfo, isLoading: tripLoading } = useTripInfoContext();
  const { setHeaderConfig } = useOutletContext<{
    setHeaderConfig: (config: { title: string; number?: number }) => void;
  }>();

  const { data: voteResult, isFetching, refetch } = useVoteResultQuery(parsedTripId);
  const { mutate: postVoteResult } = usePostVoteResultMutation();
  const [formattedTime, setFormattedTime] = useState<string>(""); 
  const [networkSyncing] = useState<boolean>(false);

  const resolvedVoteResult: VoteResultType = voteResult ?? {
    httpStatus: "",
    code: "",
    message: "",
    result: [],
  };

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: tripInfo.roomName.length > 6 ? `${tripInfo.roomName.slice(0, 4)}...` : tripInfo.roomName,
        number: tripInfo.userCount,
      });

      postVoteResult({
        tripId: parsedTripId,
        roomId: parsedRoomId,
        voteRoomId: parsedRoomId,
      });
    }
  }, [tripInfo, parsedTripId, postVoteResult, setHeaderConfig]);

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
      const limitMinutes = timeMapping[tripInfo.voteLimitTime] || 2880;
      setFormattedTime(
        limitMinutes >= 60
          ? `${Math.floor(limitMinutes / 60)}시간 이후 종료됩니다.`
          : `${limitMinutes}분 이후 종료됩니다.`
      );
    }
  }, [tripInfo?.voteLimitTime]);

  useEffect(() => {
    refetch(); 
  }, [tripId]); 

  useEffect(() => {
    const handleVoteUpdate = () => {
      refetch();
    };

    window.addEventListener("voteUpdated", handleVoteUpdate);
    return () => window.removeEventListener("voteUpdated", handleVoteUpdate);
  }, [refetch]);

  const goodCount = resolvedVoteResult.result.filter((vote) => vote.type === "GOOD").reduce((acc, cur) => acc + (cur.count || 0), 0);
  const badCount = resolvedVoteResult.result.filter((vote) => vote.type === "BAD").reduce((acc, cur) => acc + (cur.count || 0), 0);

  const step = goodCount > badCount ? "찬성확인" : "반대확인";
  const type = goodCount > badCount ? "찬성" : "반대";

  if (tripLoading || isFetching || networkSyncing)
    return <p>네트워크 연결 확인 중... 데이터 동기화 중입니다.</p>;

  return (
    <>
      <ResultCard
        step={step}
        type={type}
        onNext={onNext}
        voteResult={voteResult ?? { httpStatus: "", code: "", message: "", result: [] }}
      />
      <S.Content>
        {tripInfo?.masterName || "관리자"}님이 여행 투표를 올렸습니다. <br />
        {formattedTime}
      </S.Content>
    </>
  );
}
