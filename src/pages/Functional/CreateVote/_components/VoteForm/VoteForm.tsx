import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import * as S from "../../../_components/Functional.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react";
import Card from "../../../../../components/Card";

export default function VoteForm({ onCalendar, onSearch }: { onCalendar: () => void, onSearch: () => void }) {
  return (
    <>
      <S.StyledCard>
          <ImagePlaceholder />
          <MessageInput />

          <Card.Divider />

          <Card.Item label="장소">
            <S.ClickableText onClick={onSearch}>장소를 입력하세요.</S.ClickableText>
          </Card.Item>

          <Card.Divider />

          <Card.Item label="기간">최소 0박 ~ 최대 0박</Card.Item>
          <S.StyledCardItem>날짜 2024.00.00 ~ 2024.00.00</S.StyledCardItem>
          <S.IconWrapper onClick={onCalendar}> 
            <CalendarIcon />
          </S.IconWrapper>
      </S.StyledCard>
    </>
  );
}
