import React from "react";
import ImagePlaceholder from "../../../CreateVotePage/_components/VoteForm/ImagePlaceholder";
import MessageInput from "../../../CreateVotePage/_components/VoteForm/MessageInput";
import OptionSection from "../../../CreateVotePage/_components/VoteForm/OptionSection";
import { Separator } from "./Separator.styles";
import * as S from "./VoteForm.styles";
import DatePicker from "../../../CreateVotePage/_components/VoteForm/DatePicker";

interface VoteFormProps {
  state: { place: string; date: string };
  onStateChange: (updatedState: any) => void;
}

const VoteForm: React.FC<VoteFormProps> = ({ state, onStateChange }) => {
  const { place, date } = state;
  console.log("현재 활성화된 탭:", state);
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
      {/* 기간 */}
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
