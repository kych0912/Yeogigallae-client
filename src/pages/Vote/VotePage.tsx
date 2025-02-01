import { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import ConfirmSuccessPage from "./ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "./ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import * as S from "./_components/Vote.styles";
import TravelCard from "./Travel/_components/TravelCard";
import VoteCard from "./VoteCard/_components/VoteCard";
import VoteDate from "./VoteDate/_components/VoteDate";
import VoteResult from "./VoteResult/_components/VoteResult";

export default function VotePage() {
  const { Funnel, Step, setStep } = useFunnel("투표메인");
  const [voteType, setVoteType] = useState<"찬성" | "반대" | null>(null);

  const handleVote = (type: "찬성" | "반대") => {
    setVoteType(type);

    if (type === "찬성") {
      setStep("날짜지정"); 
    } else {
      setStep("결과"); 
    }
  };

  return (
    <S.StyledCommonContainer>
      <Funnel>
        <Step name="투표메인">
          <TravelCard onNext={() => setStep("투표동의")} />
        </Step>

        <Step name="투표동의">
          <VoteCard
            onAgree={() => handleVote("찬성")}
            onDisagree={() => handleVote("반대")}
            showConfirmMessage={false}
          />
        </Step>

        <Step name="날짜지정">
          <VoteDate onNext={() => setStep("결과")} />
        </Step>

        <Step name="결과">
          <VoteResult
            tripId={123}
            type={voteType as "찬성" | "반대"} 
            onNext={() =>
              voteType === "찬성" ? setStep("찬성확인") : setStep("반대확인")
            }
          />
        </Step>

        <Step name="찬성확인">
          <ConfirmSuccessPage />
        </Step>

        <Step name="반대확인">
          <ConfirmFailPage />
        </Step>
      </Funnel>
    </S.StyledCommonContainer>
  );
}
