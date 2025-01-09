import React from "react";
import * as S from "./Option.styles";

interface OptionSectionProps {
  label: string;
  placeholder: string;
}

const OptionSection: React.FC<OptionSectionProps> = ({ label, placeholder }) => {
  return (
    <S.OptionSection>
      <S.Label>{label}</S.Label>
      <S.TextInput placeholder={placeholder} />
    </S.OptionSection>
  );
};

export default OptionSection;
