import { useState } from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendar from "./CreateCalendar/_components/CreateCalendar";
import SearchPage from "../SearchPage/SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import CommonContainer from "../../components/Layout/CommonContainer";

export default function FunctionalFunnel() {
  const { Funnel, Step, setStep } = useFunnel("생성");

  const [selectedPlaceName] = useState<string | null>(null);

  return (
    <CommonContainer>
      <Funnel>
        <Step name="생성">
          <CreateVote
            onCalendar={() => setStep("캘린더")}
            onSearch={() => setStep("주소검색")}
            selectedPlaceName={selectedPlaceName} 
          />
        </Step>

        <Step name="캘린더">
          <CreateCalendar 
            onNext={() => {
              setStep("생성"); 
            }}/>
        </Step>

        <Step name="주소검색">
          <SearchPage />
        </Step>
      </Funnel>
    </CommonContainer>
  );
};

