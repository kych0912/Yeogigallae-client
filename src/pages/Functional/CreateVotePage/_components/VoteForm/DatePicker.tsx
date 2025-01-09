import React from "react";
import * as S from "./DatePicker.styles";

const DatePicker: React.FC = () => {
  return (
    <S.DatePickerWrapper>
      <S.Label>기간</S.Label>
      <S.TextInput placeholder="2024.00.00 ~ 2024.00.00" />
    </S.DatePickerWrapper>
  );
};

export default DatePicker;