import React from "react";
import * as S from "./CalendarTabs.styles";

interface CalendarTabsProps {
  activeTab: "date" | "flexible";
  onTabChange: (tab: "date" | "flexible") => void;
}

const CalendarTabs: React.FC<CalendarTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <S.TabGroup>
      <S.ProgressContainer>
        {/* 왼쪽 선 */}
        <S.ProgressLine width="46px" $completed={activeTab === "date" || activeTab === "flexible"} />

        {/* 1번 동그라미 */}
        <S.ProgressCircleWrapper onClick={() => onTabChange("date")}>
          <S.ProgressCircle $active={activeTab === "date"} />
          <S.ProgressLabel $active={activeTab === "date"}>연 • 월 지정</S.ProgressLabel>
        </S.ProgressCircleWrapper>

        {/* 가운데 선 */}
        <S.ProgressLine width="68px" $completed={activeTab === "flexible"} />

        {/* 2번 동그라미 */}
        <S.ProgressCircleWrapper onClick={() => onTabChange("flexible")}>
          <S.ProgressCircle $active={activeTab === "flexible"} />
          <S.ProgressLabel $active={activeTab === "flexible"}>날짜 지정</S.ProgressLabel>
        </S.ProgressCircleWrapper>

        {/* 오른쪽 선 */}
        <S.ProgressLine width="46px" $completed={false} />
      </S.ProgressContainer>
    </S.TabGroup>
  );
};

export default CalendarTabs;
