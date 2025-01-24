import React from "react";
import * as S from "./CalendarTabs.styles";
import CheckIcon from "../../assets/icons/CheckIcon.svg?react";

interface CalendarTabsProps {
  activeTab: "date" | "flexible";
  onTabChange: (tab: "date" | "flexible") => void;
}

const CalendarTabs: React.FC<CalendarTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <S.TabGroup>
      <S.ProgressContainer>
        <S.ProgressLine width="46px" $completed={activeTab === "date" || activeTab === "flexible"} />

        {/* 1번 */}
        <S.ProgressCircleWrapper onClick={() => onTabChange("date")}>
          <S.ProgressCircle $active={activeTab === "date" || activeTab === "flexible"} $completed={activeTab === "flexible"}>
          {activeTab === "flexible" ?
            <S.CustomCheckIcon>
              <CheckIcon />
            </S.CustomCheckIcon> : <S.CircleText $active={activeTab === "date"}>1</S.CircleText>}
          </S.ProgressCircle>
          <S.ProgressLabel $active={activeTab === "date"}>연 • 월 지정</S.ProgressLabel>
        </S.ProgressCircleWrapper>

        <S.ProgressLine width="68px" $completed={activeTab === "flexible"} />

        {/* 2번 */}
        <S.ProgressCircleWrapper onClick={() => onTabChange("flexible")}>
          <S.ProgressCircle $active={activeTab === "flexible"}>
            <S.CircleText $active={activeTab === "flexible"}>2</S.CircleText>
          </S.ProgressCircle>
          <S.ProgressLabel $active={activeTab === "flexible"}>날짜 지정</S.ProgressLabel>
        </S.ProgressCircleWrapper>

        <S.ProgressLine width="46px" $completed={false} />
      </S.ProgressContainer>
    </S.TabGroup>
  );
};

export default CalendarTabs;
