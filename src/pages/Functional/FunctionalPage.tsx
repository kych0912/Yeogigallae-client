import React from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendarPage from "../Functional/CreateCalendar/CreateCalendar";
import SearchPage from "../Functional/SearchPage/SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import * as S from "./_components/Functional.styles";

const FunctionalFunnel: React.FC = () => {
  const { Funnel, Step, setStep } = useFunnel("생성");

  return (
    <S.Container>
      <Funnel>
      <Step name="생성">
          <CreateVote
            onCalendar={() => setStep("캘린더")}
            onSearch={() => setStep("주소검색")}
          />
        </Step>

        <Step name="캘린더">
          <CreateCalendarPage />
        </Step>

        <Step name="주소검색">
          <SearchPage />
        </Step>
      </Funnel>
    </S.Container>
  );
};

export default FunctionalFunnel;