import React from "react";
import Card from "../../../../components/Card";
import * as S from "./Duration.styles";

interface DurationInfoProps {
  duration: string;
}

const DurationInfo: React.FC<DurationInfoProps> = ({ duration }) => {
  return (
    <S.Wrapper>
      <S.InfoItem>
        <S.InfoLabel>기간</S.InfoLabel>
        <Card.Item label="기간">{duration}</Card.Item>
      </S.InfoItem>
    </S.Wrapper>
  );
};

export default DurationInfo;
