import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import Card from "../../../../components/Card";
import * as S from "../../_components/Vote.styles";

export default function DurationInfo() {
  const { tripInfo } = useTripInfoContext(); 
  const formattedDuration = tripInfo?.startDate && tripInfo?.endDate ? `${tripInfo.startDate} ~ ${tripInfo.endDate}` : "기간 미정";

  return (
    <S.Wrapper>
      <Card.Item label="기간">날짜 지정 : {formattedDuration}</Card.Item>
    </S.Wrapper>
  );
}
