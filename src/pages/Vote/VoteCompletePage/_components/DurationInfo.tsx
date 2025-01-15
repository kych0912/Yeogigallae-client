import React from "react";
import Card from "../../../../components/Card";
import * as S from "./Duration.styles";
import { voteData } from "../../VoteAgreePage/_components/VoteCard/voteData";

const DurationInfo: React.FC = () => {
  return (
    <S.Wrapper>
      <S.InfoItem>
        <Card.Item label="기간">날짜지정 : {voteData.duration}</Card.Item>
      </S.InfoItem>
    </S.Wrapper>
  );
};

export default DurationInfo;
