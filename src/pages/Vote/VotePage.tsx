import React, { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import VoteDatePage from "./VoteDatePage/VoteDatePage";
import ConfirmSuccessPage from "./ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "./ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import * as S from "./_components/Vote.styles";
import TravelCard from "./VoteAgreePage/_components/TravelCard/TravelCard";
import VoteCard from "./VoteAgreePage/_components/VoteCard/VoteCard";
import VoteResult from "./VoteCompletePage/VoteResult";

const VotePage: React.FC = () => {
  const { Funnel, Step, setStep } = useFunnel("투표메인");
  const [voteType, setVoteType] = useState<"찬성" | "반대" | null>(null); // 상태 추가

  return (
    <S.Container>
      <Funnel>
        <Step name="투표메인">
          <TravelCard onNext={() => setStep("투표동의")} />
        </Step>

        <Step name="투표동의">
          <VoteCard
            onAgree={() => {
              setVoteType("찬성"); 
              setStep("날짜지정"); 
            }}
            onDisagree={() => {
              setVoteType("반대"); 
              setStep("결과"); // 반대로 바로 이동
            }}
          />
        </Step>

        <Step name="날짜지정">
          <VoteDatePage
            onNext={() => {
              setStep("결과"); // 결과(찬성)로 이동
            }}
          />
        </Step>

        <Step name="결과"> 
          <VoteResult
            type={voteType} // 찬성 or 반대
            onNext={() =>
              voteType === "찬성" 
                ? setStep("찬성확인") 
                : setStep("반대확인") 
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
    </S.Container>
  );
};

export default VotePage;
