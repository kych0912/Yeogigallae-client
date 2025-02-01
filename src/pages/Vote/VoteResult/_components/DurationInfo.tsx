import Card from "../../../../components/Card";
import * as S from "../../_components/Vote.styles"
import { dummyData } from "../../dummyData";

export default function DurationInfo() {
  return (
    <S.Wrapper>
        <Card.Item label="기간">날짜지정 : {dummyData.duration}</Card.Item>
    </S.Wrapper>
  );
};
