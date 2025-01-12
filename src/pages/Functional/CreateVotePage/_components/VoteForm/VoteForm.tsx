import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import MessageInput from "./MessageInput";
import OptionSection from "./OptionSection";
import { Separator } from "./Separator.styles";
import * as S from "./VoteForm.styles";
import DatePicker from "./DatePicker";

interface VoteFormProps {
  state: { place: string; price: string; date: string };
  onStateChange: (updatedState: any) => void;
}

const VoteForm: React.FC<VoteFormProps> = ({ state, onStateChange }) => {
  const { place, price, date } = state;

  return (
    <S.Content>
      <ImagePlaceholder />
      <MessageInput />
      <Separator />
      {/* 장소 */}
      <OptionSection
        label="장소"
        placeholder="장소를 입력하세요."
        value={place}
        onChange={(e) =>
          onStateChange({ ...state, place: e.target.value })
        }
      />
      <Separator />
      {/* 가격 */}
      <OptionSection
        label="가격"
        placeholder="1박/20만원"
        value={price}
        onChange={(e) =>
          onStateChange({ ...state, price: e.target.value })
        }
      />
      <Separator />
      {/* 날짜 */}
      <DatePicker
        value={date}
        onChange={(newDate) =>
          onStateChange({ ...state, date: newDate })
        }
      />
    </S.Content>
  );
};

export default VoteForm;
