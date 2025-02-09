import { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import ConfirmSuccessPage from "./ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "./ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import * as S from "./_components/Vote.styles";
import TravelCard from "./Travel/_components/TravelCard";
import VoteCard from "./VoteCard/_components/VoteCard";
import VoteResult from "./VoteResult/_components/VoteResult";

export default function VotePage() {
  const funnelOptions = {
    steps: ["투표메인", "투표동의", "결과", "찬성확인", "반대확인"] as const, 
    init: { step: "투표메인", context: {} },
    stepQueryKey: "step",
  };

  const [FunnelComponent, setStep, contextMap] = useFunnel(funnelOptions);
  const [voteType, setVoteType] = useState<"찬성" | "반대" | null>(null);

  return (
    <S.StyledCommonContainer>
      <FunnelComponent>
        <FunnelComponent.Step name="투표메인">
          <TravelCard onNext={() => setStep("투표동의", contextMap["투표메인"] || {})} />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="투표동의">
          <VoteCard
            onAgree={() => {
              setVoteType("찬성");
              setStep("결과", contextMap["투표동의"] || {});
            }}
            onDisagree={() => {
              setVoteType("반대");
              setStep("결과", contextMap["투표동의"] || {});
            }}
            showConfirmMessage={false}
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="결과">
          <VoteResult
            type={voteType!}
            onNext={() =>
              voteType === "찬성"
                ? setStep("찬성확인", contextMap["결과"] || {})
                : setStep("반대확인", contextMap["결과"] || {})
            }
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
