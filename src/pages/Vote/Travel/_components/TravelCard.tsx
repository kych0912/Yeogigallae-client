import { useState, useEffect } from "react";
import Card from "./../../../../components/Card";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Vote.styles";
import { useOutletContext } from "react-router-dom";
import SkeletonTravelCard from "./SkeletonTravelCard";
import { DEFAULT_TripInfo } from "../../../../apis/vote/mocks/tripInfoMocks";

export default function TravelCardWrapper({
  onNext,
}: {
  onNext: () => void;
}) {
  return <TravelCard onNext={onNext} />;
}

function TravelCard({
  onNext,
}: {
  onNext: () => void;
}) {
  const { tripInfo: fetchedTripInfo } = useTripInfoContext();
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  const tripInfo = fetchedTripInfo ?? DEFAULT_TripInfo;

  useEffect(() => {
    if (tripInfo.result) {
      setHeaderConfig({
        title: tripInfo.result.roomName,
        number: tripInfo.result.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  if (loading) {
    return <SkeletonTravelCard />;
  }

  return (
    <Card>
      <Card.Image>
        <img
          src={tripInfo.result.imageUrl || "https://via.placeholder.com/300"}
          alt="trip preview"
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem", objectFit: "cover" }}
        />
      </Card.Image>

      <S.StyledCardTitle>{tripInfo.result.description}</S.StyledCardTitle>

      <Card.Divider />

      <S.StyledItem>
        <Card.Item label="장소">{tripInfo.result.customLocation || "정보 없음"}</Card.Item>
        <Card.Item label="금액">{tripInfo.result.price || "가격 미정"}</Card.Item>
        <Card.Item label="기간">
          {tripInfo.result.startDate && tripInfo.result.endDate
            ? `${calculateTripDuration(tripInfo.result.startDate, tripInfo.result.endDate)}일`
            : "기간 미정"}
        </Card.Item>
      </S.StyledItem>

      <Button size="large" onClick={onNext}> 
        {"투표하러 가기"}
      </Button>
    </Card>
  );
}

const calculateTripDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "기간 미정";

  const difference = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return difference;
};
