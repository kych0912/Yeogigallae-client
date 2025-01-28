import * as S from "./CalendarTabs.styles";
import CheckIcon from "../../assets/icons/CheckIcon.svg?react";
import { CalendarTabsProps } from "./types/types";

export default function CalendarTabs({
  activeTab,
  onTabChange,
  isStart,
  isEnd,
  isStartAndEnd, 
}: CalendarTabsProps) {
  return (
    <S.TabGroup>
      <S.ProgressRow>
        {/* 1번 버튼 */}
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

        <S.ProgressLine width="5.844rem" $completed={activeTab === "flexible"} />

        {/* 2번 버튼 */}
        <S.ButtonContainer>
          <S.ProgressCircleWrapper onClick={() => onTabChange("flexible")}>
            <S.ProgressCircle
              $active={activeTab === "flexible" || !!isStart || !!isEnd}
              $isStartAndEnd={!!isStartAndEnd} 
            >
              <S.CircleText $active={activeTab === "flexible" || !!isStartAndEnd}>
                2
              </S.CircleText>
            </S.ProgressCircle>
          </S.ProgressCircleWrapper>
          <S.ProgressLabel $active={activeTab === "flexible" || !!isStartAndEnd}>
            날짜 지정
          </S.ProgressLabel>
        </S.ButtonContainer>
      </S.ProgressRow>
    </S.TabGroup>
  );
}
