import { useState, useEffect } from "react";
import { useVoteContext } from "../../context/VoteResultContext";
import { useTripInfoContext } from "../../../../hooks/useTripInfo";
import { Button } from "../../../../components/Button";
import Card from "../../../../components/Card";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import ConfirmMessage from "../../ConfirmPage/_components/ConfirmFailCard/ConfirmMessage";
import * as S from "./../../_components/Vote.styles";
import { VoteType } from "../../../../types/voteTypes/voteTypes";
import VoteSkeleton from "./SkeletonVoteCard";
import { DEFAULT_TripInfo } from "../../../../apis/vote/mocks/tripInfoMocks";

export default function VoteCard({
  onAgree,
  onDisagree,
  showConfirmMessage,
  isSuccess,
}: {
  onAgree?: () => void;
  onDisagree?: () => void;
  showConfirmMessage?: boolean;
  isSuccess?: boolean | null;
}) {
  const { state, dispatch } = useVoteContext();
  const { tripInfo: fetchedTripInfo } = useTripInfoContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  const tripInfo = fetchedTripInfo?.result ?? DEFAULT_TripInfo.result;
  const currentVoteType = state.voteType; 

  console.log("현재 선택된 투표 타입:", currentVoteType);

  const handleVote = (type: VoteType) => {
    if (currentVoteType === type) {
      console.log("이미 선택한 타입입니다:", type);
      return;
    }

    console.log(`투표 선택: ${type}`);
    dispatch({ type: "SET_VOTE_TYPE", payload: type });

    if (type === "GOOD") {
      onAgree?.();
    } else {
      onDisagree?.();
    }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };

  const formatTripMonths = (startDate: string, endDate: string) => {
    const startMonth = new Date(startDate).getMonth() + 1;
    const endMonth = new Date(endDate).getMonth() + 1;
    return `${startMonth}~${endMonth}월`;
  };

  if (loading) {
    return <VoteSkeleton />;
  }

  return (
    <Card>
      {showConfirmMessage && (
        <>
          <ConfirmMessage />
          <Button size="large" onClick={() => console.log("확인 버튼 클릭")}>{"확인"}</Button>
        </>
      )}

      <Card.Image>
        <img
          src={tripInfo?.imageUrl}
          alt="Vote Image"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1.5rem",
            objectFit: "cover",
          }}
        />
      </Card.Image>

      <S.CustomWrapper>
        <S.CustomCardItem label="장소">
          <span>{tripInfo?.customLocation || "정보 없음"}</span> <br />
          <span>{tripInfo?.location || "주소 정보 없음"}</span>
        </S.CustomCardItem>
        <S.IconWrapper onClick={() => handleCopyToClipboard(tripInfo?.masterName)}>
          <LinkIcon />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">{tripInfo?.price || "가격 미정"}</Card.Item>

      <Card.Divider />
      <Card.Item label="기간">
        {tripInfo?.startDate && tripInfo?.endDate
          ? `최소 ${tripInfo?.minDays}박 ~ 최대 ${tripInfo?.maxDays - 1}박 / ${formatTripMonths(tripInfo?.startDate, tripInfo?.endDate)}`
          : "기간 미정"}
      </Card.Item>
      <S.CustomSpacer />

      {!showConfirmMessage && isSuccess !== true && (
        <S.TwoSelect>
          <Button 
            size="large" 
            onClick={() => handleVote("BAD")}
            disabled={currentVoteType !== null && currentVoteType === "BAD"} 
          >
            {"난 못 가.."}
          </Button>
          <Button 
            size="large" 
            onClick={() => handleVote("GOOD")} 
            style={{ backgroundColor: "#3b46fa" }}
            disabled={currentVoteType !== null && currentVoteType === "GOOD"} 
          >
            {"좋아!"}
          </Button>
        </S.TwoSelect>
      )}
    </Card>
  );
}
