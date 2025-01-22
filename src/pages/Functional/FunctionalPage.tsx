import React from "react";
import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendarPage from "../Functional/CreateCalendar/CreateCalendar"
import SearchPage from "../Functional/SearchPage/SearchPage";
import CreateCoursePage from "../Functional/CreateCoursePage/CreateCoursePage";
import CreateVotePage from "../Functional/CreateVotePage/CreateVotePage";
import * as S from "./_components/Functional.styles";

const FunctionalFunnel: React.FC = () => {
  const { Funnel, Step, setStep } = useFunnel("코스 생성");

  return (
    <S.Container>
      <Funnel>
        <Step name="코스 생성">
          <CreateCoursePage
            onNext={() => setStep("캘린더")}
            onSearch={() => setStep("검색")}
          />
        </Step>

        <Step name="투표 생성">
          <CreateVotePage
            onNext={() => setStep("캘린더")}
            onSearch={() => setStep("검색")}
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