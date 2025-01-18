import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";

export default function VoteForm({ onCalendar, onSearch, isVote }: { onCalendar: () => void, onSearch: () => void, isVote: boolean; }) {
  return (
    <>
      <S.StyledCard>
          <ImagePlaceholder />
          <MessageInput />

          <S.StyledDivider />


          
          <S.StyledDivider />

          <Card.Item label="장소">
            <S.ClickableText onClick={onSearch}>장소를 입력하세요.</S.ClickableText>
          </Card.Item>

          <S.StyledDivider />

          {isVote && (
            <>
              <Card.Item label="가격">
                <S.ClickableText>예) 1박 / 20만원</S.ClickableText>
              </Card.Item>
              <S.StyledDivider />
            </>
          )}

          <Card.Item label="기간">최소 0박 ~ 최대 0박</Card.Item>
          <S.StyledCardItem>
            <span className="text">날짜 2024.00.00 ~ 2024.00.00</span>
            <S.IconWrapper onClick={onCalendar} className="icon">
              <CalendarIcon />
            </S.IconWrapper>
          </S.StyledCardItem>

      </S.StyledCard>
    </>
  );
}
