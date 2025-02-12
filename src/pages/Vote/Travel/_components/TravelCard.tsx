import { useState, useEffect } from "react";
import Card from "./../../../../components/Card";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Vote.styles";
import { useOutletContext } from "react-router-dom";
import { VoteProvider } from "../../context/VoteResultContext";
import SkeletonTravelCard from "./SkeletonTravelCard";

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (tripInfo) {
      setHeaderConfig({
        title: tripInfo.roomName,
        number: tripInfo.userCount,
      });
    }
  }, [tripInfo, setHeaderConfig]);

  if (loading) {
    return <SkeletonTravelCard />;
  }

  if (!tripInfo) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  return (
    <Card>
      <Card.Image>
        <img
          src={tripInfo.imageUrl || "https://via.placeholder.com/300"}
          alt="trip preview"
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem", objectFit: "cover" }}
        />
      </Card.Image>

      <S.StyledCardTitle>{tripInfo.description}</S.StyledCardTitle>

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
  );
}

const calculateTripDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "기간 미정"; // 유효성 검사

  const difference = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return difference;
};
