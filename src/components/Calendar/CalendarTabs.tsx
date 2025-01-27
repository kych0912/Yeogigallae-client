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
      {/* 버튼과 선 */}
      <S.ProgressRow>
        {/* 첫 번째 버튼 */}
        <S.ButtonContainer>
          <S.ProgressCircleWrapper onClick={() => onTabChange("date")}>
            <S.ProgressCircle
              $active={activeTab === "date" || activeTab === "flexible"}
              $completed={activeTab === "flexible"}
            >
              {activeTab === "flexible" ? (
                <S.CustomCheckIcon>
                  <CheckIcon />
                </S.CustomCheckIcon>
              ) : (
                <S.CircleText $active={activeTab === "date"}>1</S.CircleText>
              )}
            </S.ProgressCircle>
          </S.ProgressCircleWrapper>
          <S.ProgressLabel
            $active={activeTab === "date"}
            $completed={activeTab === "date" || activeTab === "flexible"}
          >
            연 • 월 지정
          </S.ProgressLabel>
        </S.ButtonContainer>

        {/* 선 */}
        <S.ProgressLine width= "5.844rem" $completed={activeTab === "flexible"} />

        {/* 두 번째 버튼 */}
        <S.ButtonContainer>
          <S.ProgressCircleWrapper onClick={() => onTabChange("flexible")}>
            <S.ProgressCircle $active={activeTab === "flexible"}>
              <S.CircleText $active={activeTab === "flexible"}>2</S.CircleText>
            </S.ProgressCircle>
          </S.ProgressCircleWrapper>
          <S.ProgressLabel $active={activeTab === "flexible"}>
            날짜 지정
          </S.ProgressLabel>
        </S.ButtonContainer>
      </S.ProgressRow>
    </S.TabGroup>
  );
};

export default CalendarTabs;
