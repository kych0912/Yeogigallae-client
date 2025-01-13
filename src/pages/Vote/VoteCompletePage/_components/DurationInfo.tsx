import React from "react";
import Card from "../../../../components/Card";
import * as S from "./Duration.styles";
import { afterData } from "../_data/afterData";

const DurationInfo: React.FC = () => {
  return (
    <S.Wrapper>
      <S.InfoItem>
        <Card.Item label="기간">날짜지정 : {afterData.duration}</Card.Item>
      </S.InfoItem>
    </S.Wrapper>
  );
};

export default DurationInfo;
