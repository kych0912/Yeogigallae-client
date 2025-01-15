import React from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel"
import VoteAgreePage from "./VoteAgreePage/VoteAgreePage";
import VoteDatePage from "./VoteDatePage/VoteDatePage";
import VoteSuccessPage from "./VoteCompletePage/VoteSuccessPage";
import VoteFailPage from "./VoteCompletePage/VoteFailPage";
import ConfirmSuccessPage from "./ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "./ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import * as S from "./_components/Vote.styles"

const VotePage: React.FC = () => {
  const { Funnel, Step, setStep } = useFunnel("투표동의"); // 기본 단계는 'agree'

  return (
    <S.Container>
      <Funnel>
        <Step name="투표동의">
          <VoteAgreePage
            onNext={() => setStep("날짜지정")}
          />
        </Step>

        <Step name="날짜지정">
          <VoteDatePage
            onSuccess={() => setStep("찬성")}
            onFail={() => setStep("반대")}
          />
        </Step>

        <Step name="찬성">
          <VoteSuccessPage
            onNext={() => setStep("찬성확인")} 
          />
        </Step>

        <Step name="반대">
          <VoteFailPage
            onNext={() => setStep("반대확인")} 
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
