import { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendar from "./CreateCalendar/_components/CreateCalendar";
import SearchPage from "../SearchPage/SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import CommonContainer from "../../components/Layout/CommonContainer";

export default function FunctionalFunnel() {
  const funnelOptions = {
    steps: ["생성", "캘린더", "주소검색"] as const, 
    init: { step: "생성", context: {} },
    stepQueryKey: "step",
  };

  const [FunnelComponent, setStep, contextMap] = useFunnel(funnelOptions);

  // 선택된 장소 이름 상태 관리
  const [selectedPlaceName] = useState<string | null>(null);

  return (
    <CommonContainer>
      <FunnelComponent>
        <FunnelComponent.Step name="생성">
          <CreateVote
            onCalendar={() => setStep("캘린더", contextMap["생성"] || {})}
            onSearch={() => setStep("주소검색", contextMap["생성"] || {})}
            selectedPlaceName={selectedPlaceName} 
          />
        </FunnelComponent.Step>

        <FunnelComponent.Step name="캘린더">
          <CreateCalendar 
            onNext={() => setStep("생성", contextMap["캘린더"] || {})} 
          />
        </FunnelComponent.Step>


        <FunnelComponent.Step name="주소검색">
          <SearchPage />
        </FunnelComponent.Step>
      </FunnelComponent>
    </CommonContainer>
  );
};