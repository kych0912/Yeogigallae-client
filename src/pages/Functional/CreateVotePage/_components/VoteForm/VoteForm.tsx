import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import OptionSection from "./OptionSection";
import ColorSelector from "./ColorSelector";
import { Separator } from "./Separator.styles";
import * as S from "./VoteForm.styles";
import DatePicker from "./DatePicker";

const VoteForm: React.FC = () => {
  return (
    <S.Content>
      <ImagePlaceholder />
      <MessageInput />
      <Separator />
      <OptionSection label="장소" placeholder="장소를 입력하세요." />
      <Separator />
      <OptionSection label="가격" placeholder="1박/20만원" />
      <Separator />
      <DatePicker />
      <ColorSelector />
      <S.SubmitButton>투표 공유하기</S.SubmitButton>
    </S.Content>
  );
};

export default VoteForm;
