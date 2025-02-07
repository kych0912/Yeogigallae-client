import { useState, useEffect } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import ConfirmSuccessPage from "./ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "./ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import * as S from "./_components/Vote.styles";
import TravelCard from "./Travel/_components/TravelCard";
import VoteCard from "./VoteCard/_components/VoteCard";
import VoteDate from "./VoteDate/_components/VoteDate";
import VoteResult from "./VoteResult/_components/VoteResult";
import { TripInfoProvider } from "./context/tripInfo/TripInfoProvider"; 
import { useTripInfoContext } from "./context/tripInfo/TripInfoContext"; 

export default function VotePage({ tripId, roomId, masterId }: { tripId: number; roomId: number; masterId: number }) {
  return (
    <TripInfoProvider tripId={tripId} roomId={roomId} masterId={masterId}>  
      <VoteProcess />
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
          <TravelCard onNext={() => setStep("투표동의", { ...contextMap["투표메인"], tripId, roomId, masterId })} />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="투표동의">
          <VoteCard
            onAgree={() => setStep("날짜지정", { ...contextMap["투표동의"], tripId, roomId, masterId })}   
            onDisagree={() => setStep("결과", { ...contextMap["투표동의"], tripId, roomId, masterId })} 
            showConfirmMessage={false}
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="날짜지정">
          <VoteDate
            onNext={() => {
              setStep("결과", { ...contextMap["날짜지정"], tripId, roomId, masterId }); 
            }}
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="결과">
          <VoteResult
            tripId={tripId}  
            type={voteType!}
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
