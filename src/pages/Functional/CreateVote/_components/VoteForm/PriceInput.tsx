import { useState } from "react";
import * as S from "../../../_components/Functional.styles";

interface PriceInputProps {
  field: any;
  nights: number;
}

// ✅ 1000 단위마다 ,(콤마) 추가
const formatWithCommas = (value: string) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// ✅ 콤마 제거 후 숫자만 남기기
const removeCommas = (value: string) => {
  return value.replace(/,/g, "");
};

export default function PriceInput({ field, nights }: PriceInputProps) {
  const [rawValue, setRawValue] = useState(() => formatWithCommas(field.value || ""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = removeCommas(e.target.value).replace(/\D/g, "").slice(0, 7);
    const formattedValue = formatWithCommas(newValue);

    setRawValue(formattedValue);
    field.onChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      let numericValue = removeCommas(rawValue);
      if (numericValue.length === 1) {
        setRawValue("");
        field.onChange("");
        e.preventDefault();
      } else {
        numericValue = numericValue.slice(0, -1);
        setRawValue(formatWithCommas(numericValue));
        field.onChange(numericValue);
        e.preventDefault();
      }
    }
  };

  return (
    <S.InputWrapper>
      <span>{nights}박 / </span>
        <S.Input
          type="text"
          placeholder="가격 입력"
          value={rawValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <span>(원)</span>
    </S.InputWrapper>
  );
}
