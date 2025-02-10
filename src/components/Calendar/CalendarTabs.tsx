import * as S from "./CalendarTabs.styles";
import CheckIcon from "../../assets/icons/CheckIcon.svg?react";
import { useCalendar } from "./context/CalendarContext";

export default function CalendarTabs({ activeTab }: { activeTab: "date" | "flexible" }) {
  const { startDate, endDate } = useCalendar();
  const isStartAndEnd = !!(startDate && endDate);

  return (
    <S.TabGroup>
      <S.ProgressRow>
        <S.ButtonContainer>
          <S.ProgressCircleWrapper>
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

        <S.ButtonContainer>
          <S.ProgressCircleWrapper>
            <S.ProgressCircle $active={activeTab === "flexible" || isStartAndEnd}>
              <S.CircleText $active={activeTab === "flexible" || isStartAndEnd}>
                2
              </S.CircleText>
            </S.ProgressCircle>
          </S.ProgressCircleWrapper>
          <S.ProgressLabel $active={activeTab === "flexible" || isStartAndEnd}>
            날짜 지정
          </S.ProgressLabel>
        </S.ButtonContainer>
      </S.ProgressRow>
    </S.TabGroup>
  );
}
