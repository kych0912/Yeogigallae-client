import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./DatePicker.styles";
import CalendarIcon from "../../../../../assets/icons/Calender.svg?react"; 

interface DatePickerProps {
  value: string; // 현재 날짜 값
  onChange: (newDate: string) => void; // 날짜 변경 이벤트
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const navigate = useNavigate(); // React Router의 네비게이션 훅

  const handleIconClick = () => {
    navigate("/functonal/calendar"); // "/create-calendar"로 이동
  };

  return (
    <S.DatePickerWrapper>
      <S.Label>기간</S.Label>
      <S.MinMaxWrapper>
        <S.MinText>최소 0박 ~ 최대 0박</S.MinText>
      </S.MinMaxWrapper>
      <S.DateInputWrapper>
        <S.LabelSmall>날짜</S.LabelSmall>
        <S.TextInput
          placeholder="2024.00.00 ~ 2024.00.00"
          value={value}
          onChange={(e) => onChange(e.target.value)} 
        />
        <S.IconWrapper onClick={handleIconClick}> 
          <CalendarIcon />
        </S.IconWrapper>
      </S.DateInputWrapper>
    </S.DatePickerWrapper>
  );
};

export default DatePicker;
