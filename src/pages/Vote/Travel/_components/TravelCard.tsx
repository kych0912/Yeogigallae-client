import Card from "./../../../../components/Card";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { useEffect } from "react";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Vote.styles";
import { useOutletContext } from "react-router-dom";
import { VoteProvider } from "../../context/VoteResultContext";

export default function TravelCardWrapper({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <VoteProvider>
      <TravelCard onNext={onNext} />
    </VoteProvider>
  );
}

function TravelCard({
  onNext
}: {
  onNext: () => void;
}) {
  const { tripInfo } = useTripInfoContext();
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: tripInfo.roomName,
        number: tripInfo.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  if (!tripInfo) return <p>로딩 중...</p>;

  const calculateTripDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) return "기간 미정"; // 유효성 검사

    const difference = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return difference;
  };


  return (
    <>
      <Card>
        <Card.Image>
          <img
            src="https://s3-alpha-sig.figma.com/img/19e3/d758/89fc76fe69058e9d77f8b9d8eb86b52a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UD7-M2Kzy6ZypAZp1TcmODXyjkhe9B7i2um316iL6yO4noUirY-KyX2rCFKo1-6AZrianWPaXaaoA5tbU2ZguoL1G-0azGwL1VNVD6Y46adpX5KaGUIZGHJqNscdNBi5t0M1tA5v5CKL4CIhG8OpEfNW3TeA57i3np-iISxtoG8zc8H61trwbw3WCS4p6xg5v5d9e~xE15oGCXJ7gG678mnNuJX8OpVdAFOTPhh7dXkbleZcv2sqQ3ES1T3qOez7awav5iTgkRWyUTWglT9tYTX40IJf7EBX-UD2ffpxovnI926qcAULaKaK-XOXxY9bag14~jRS3SdueUe4xKmjmg__"
            alt="placeholder"
            style={{ width: "100%", height: "100%", borderRadius: "1.5rem", objectFit: "cover" }}
          />
        </Card.Image>

        <S.StyledCardTitle>
          {tripInfo.description} 
        </S.StyledCardTitle>

        <Card.Divider />

        <S.StyledItem>
          <Card.Item label="장소">{tripInfo.customLocation || "정보 없음"}</Card.Item>
          <Card.Item label="금액">{tripInfo.price || "가격 미정"}</Card.Item>
          <Card.Item label="기간">
            {tripInfo.startDate && tripInfo.endDate
              ? `${calculateTripDuration(tripInfo.startDate, tripInfo.endDate)}일`
              : "기간 미정"}
          </Card.Item>
        </S.StyledItem>

        <Button size="large" onClick={onNext}>{"투표하러 가기"}</Button>
      </Card>
    </>
  );
}
