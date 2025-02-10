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
import { useTripInfoContext } from "../../hooks/useTripInfo";

export default function VotePage() {
  return (
    <TripInfoProvider>
      <VoteProvider>
        <VoteProcess />
      </VoteProvider>
    </TripInfoProvider>
  );
}

function VoteProcess() {
  const { tripId, roomId, masterId } = useTripInfoContext();

  const funnelOptions = {
    steps: ["투표메인", "투표동의", "날짜지정", "결과", "찬성확인", "반대확인"] as const, 
    init: { step: "투표메인", context: { tripId, roomId, masterId } },  
    stepQueryKey: "step",
  };

  const [FunnelComponent, setStep, contextMap] = useFunnel(funnelOptions);
  const [voteType, setVoteType] = useState<"찬성" | "반대" | null>(null);

  useEffect(() => {
    if (voteType === "찬성") {
      setStep("찬성확인", { ...contextMap["결과"], tripId, roomId, masterId });
    } else if (voteType === "반대") {
      setStep("반대확인", { ...contextMap["결과"], tripId, roomId, masterId });
    }
  }, [voteType]);

  return (
    <S.StyledCommonContainer>
      <FunnelComponent>
        <FunnelComponent.Step name="투표메인">
          <TravelCard onNext={() => setStep("투표동의", { ...contextMap["투표메인"], tripId })} />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="투표동의">
          <VoteCard
            onAgree={() => setStep("날짜지정", { ...contextMap["투표동의"], tripId, roomId, masterId })}   
            onDisagree={() => setStep("결과", { ...contextMap["투표동의"], tripId, roomId, masterId })} 
            showConfirmMessage={false}
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="결과">
          <VoteResult 
            onNext={() => {
              setVoteType(voteType === "찬성" ? "찬성" : "반대");
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
