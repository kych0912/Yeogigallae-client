import { useState } from "react";
import * as S from "../../../_components/Functional.styles";

interface PriceInputProps {
  value: string;
  onChange: (value: string) => void;
  nights: number;
}

const formatPrice = (price?: number) => {
  if (!price || price === 0) return "20만원";
  const mainUnit = Math.floor(price / 10000);
  const subUnit = price % 10000;
  return subUnit === 0 ? `${mainUnit}만 원` : `${mainUnit}만 ${subUnit}원`;
};

export default function PriceInput({ value, onChange, nights }: PriceInputProps) {
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/\D/g, "").slice(0, 7);
    onChange(newValue);
    setShowToast(false);
  };

  const handleBlur = () => {
    if (!value) {
      setShowToast(true);
    } else {
      let parsedValue = parseInt(value, 10) || 0;
      onChange(`${nights}박 / ${formatPrice(parsedValue)}`);
    }
  };

  return (
    <>
      <S.Input
        type="text"
        placeholder={`${nights}박 / 20만원`}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleBlur();
          }
          if (e.key === "Backspace") {
            onChange(value ? value.slice(0, -1) : "");
          }
        }}
      />
      {showToast && <S.StyledToast>가격을 입력해주세요! (최대 999만원)</S.StyledToast>}
    </>
  );
}
