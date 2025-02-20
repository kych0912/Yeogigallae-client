import { useState, useEffect } from "react";
import Card from "./../../../../components/Card";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Vote.styles";
import { useOutletContext } from "react-router-dom";
import SkeletonTravelCard from "./SkeletonTravelCard";

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
  const { tripInfo, isLoading } = useTripInfoContext();
  const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();

  const [localLoading, setLocalLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLocalLoading(false);
    }, 500);
    return () => clearTimeout(delay);
  }, []);

  const truncateTitle = (title: string) => (title.length > 6 ? `${title.slice(0, 4)}...` : title);

  const truncateDescription = (description: string) =>
    description.length > 20 ? `${description.slice(0, 20)}...` : description;

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: truncateTitle(tripInfo.roomName), 
        number: tripInfo.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  if (isLoading || localLoading) return <SkeletonTravelCard />;
  if (!tripInfo) return <p>⚠️ 여행 정보가 존재하지 않습니다.</p>;

  return (
    <Card>
      <Card.Image>
        <img
          src={tripInfo.imageUrl || "https://via.placeholder.com/300"}
          alt="trip preview"
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem", objectFit: "cover" }}
        />
      </Card.Image>

      <S.StyledCardTitle>{truncateDescription(tripInfo.description || "나랑 여행가자")}</S.StyledCardTitle>
      <Card.Divider />

      <S.StyledItem>
        <Card.Item label="장소">{tripInfo.customLocation || "도시"}</Card.Item>
        <Card.Item label="금액">{tripInfo.price ? `${Number(tripInfo.price).toLocaleString()}` : "가격 미정"}</Card.Item>
        <Card.Item label="기간">
          {tripInfo.startDate && tripInfo.endDate
            ? `${calculateTripDuration(tripInfo.startDate, tripInfo.endDate)}일`
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
