import React from "react";
import * as S from "./Option.styles";

interface OptionSectionProps {
  label: string;
  placeholder: string;
  value: string; // 입력 필드 값
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 입력 변경 이벤트
}

const OptionSection: React.FC<OptionSectionProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <S.OptionSection>
      <S.Label>{label}</S.Label>
      <S.TextInput placeholder={placeholder} value={value} onChange={onChange} />
    </S.OptionSection>
  );
};

export default OptionSection;
