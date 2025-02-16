import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import ConfirmSuccessPage from "./ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "./ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import * as S from "./_components/Vote.styles";
import TravelCard from "./Travel/_components/TravelCard";
import VoteCard from "./VoteCard/_components/VoteCard";
import VoteResult from "./VoteResult/_components/VoteResult";
import { VoteProvider } from "./context/VoteResultContext";
import { TripInfoProvider } from "./context/tripInfo/TripInfoProvider";

export default function VotePage() {
  const { tripId, roomId } = useParams<{ tripId?: string; roomId?: string }>(); // ✅ tripId와 roomId가 undefined일 수 있음

  if (!tripId || !roomId) {
    return <p>잘못된 접근입니다. (roomId 또는 tripId 없음)</p>;
  }

  const parsedTripId = parseInt(tripId, 10); // ✅ undefined 방지
  const parsedRoomId = parseInt(roomId, 10);

  return (
    <TripInfoProvider tripId={parsedTripId} roomId={parsedRoomId}>
      <VoteProvider>
        <VoteProcess tripId={parsedTripId} />
      </VoteProvider>
    </TripInfoProvider>
  );
}

function VoteProcess({ tripId }: { tripId: number }) {
  const [voteType, setVoteType] = useState<"GOOD" | "BAD" | null>(null);

  const funnelOptions = {
    steps: ["투표메인", "투표동의", "결과", "찬성확인", "반대확인"] as const,
    init: { step: "투표메인", context: { tripId } }, // ✅ params의 tripId 사용
    stepQueryKey: "step",
  };

  const [FunnelComponent, setStep, contextMap] = useFunnel(funnelOptions);

  useEffect(() => {
    if (voteType === "GOOD") {
      setStep("찬성확인", { ...contextMap["결과"], tripId });
    } else if (voteType === "BAD") {
      setStep("반대확인", { ...contextMap["결과"], tripId });
    }
  }, [voteType, tripId]);

  return (
    <S.StyledCommonContainer>
      <FunnelComponent>
        <FunnelComponent.Step name="투표메인">
          <TravelCard onNext={() => setStep("투표동의", { ...contextMap["투표메인"], tripId })} />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="투표동의">
          <VoteCard
            onAgree={() => setStep("결과", { ...contextMap["투표동의"], tripId, voteType: "GOOD" })}
            onDisagree={() => setStep("결과", { ...contextMap["투표동의"], tripId, voteType: "BAD" })}
            showConfirmMessage={false}
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="결과">
          <VoteResult
            tripId={tripId}
            onNext={() => {
              setVoteType(contextMap["결과"]?.voteType === "GOOD" ? "GOOD" : "BAD");
            }}
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="찬성확인">
          <ConfirmSuccessPage />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="반대확인">
          <ConfirmFailPage />
        </FunnelComponent.Step>
      </FunnelComponent>
    </S.StyledCommonContainer>
  );
}
