import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import Card from "../../../../components/Card";
import * as S from "../../_components/Vote.styles";
import { DEFAULT_TripInfo } from "../../../../apis/vote/mocks/tripInfoMocks"; 

export default function DurationInfo() {
  const { tripInfo: fetchedTripInfo } = useTripInfoContext(); 
  const tripInfo = fetchedTripInfo?.result ?? DEFAULT_TripInfo.result; 

  const formattedDuration =
    tripInfo?.startDate && tripInfo?.endDate
      ? `${tripInfo.startDate} ~ ${tripInfo.endDate}`
      : "기간 미정";

  return (
    <S.Wrapper>
      <Card.Item label="기간">날짜 지정 : {formattedDuration}</Card.Item>
    </S.Wrapper>
  );
}
