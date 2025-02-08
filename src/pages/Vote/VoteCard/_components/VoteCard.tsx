import { useVoteContext } from "../../context/VoteResultContext";
import { useTripInfoContext } from "../../../../hooks/useTripInfo"; 
import { Button } from "../../../../components/Button";
import Card from "../../../../components/Card";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import ConfirmMessage from "../../ConfirmPage/_components/ConfirmFailCard/ConfirmMessage";
import * as S from "./../../_components/Vote.styles";
import { VoteType } from "../../../../types/voteTypes/voteTypes";

const DEFAULT_IMAGE_URL =
  "https://s3-alpha-sig.figma.com/img/19e3/d758/89fc76fe69058e9d77f8b9d8eb86b52a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UD7-M2Kzy6ZypAZp1TcmODXyjkhe9B7i2um316iL6yO4noUirY-KyX2rCFKo1-6AZrianWPaXaaoA5tbU2ZguoL1G-0azGwL1VNVD6Y46adpX5KaGUIZGHJqNscdNBi5t0M1tA5v5CKL4CIhG8OpEfNW3TeA57i3np-iISxtoG8zc8H61trwbw3WCS4p6xg5v5d9e~xE15oGCXJ7gG678mnNuJX8OpVdAFOTPhh7dXkbleZcv2sqQ3ES1T3qOez7awav5iTgkRWyUTWglT9tYTX40IJf7EBX-UD2ffpxovnI926qcAULaKaK-XOXxY9bag14~jRS3SdueUe4xKmjmg__";

export default function VoteCard({
  onAgree,
  onDisagree,
  showConfirmMessage,
}: {
  onAgree?: () => void;
  onDisagree?: () => void;
  showConfirmMessage?: boolean;
}) {
  const { dispatch } = useVoteContext();
  const { tripInfo } = useTripInfoContext();

  if (!tripInfo) return <p>로딩 중...</p>;

  const handleVote = (type: VoteType) => {
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
          src={DEFAULT_IMAGE_URL}
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
          <span>{tripInfo.customLocation || "정보 없음"}</span> <br />
          <span>{tripInfo.location || "주소 정보 없음"}</span>
        </S.CustomCardItem>
        <S.IconWrapper onClick={() => handleCopyToClipboard(tripInfo.masterName)}> {/* ✅ tripInfo 사용 */}
          <LinkIcon />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">{tripInfo.price || "가격 미정"}</Card.Item>

      <Card.Divider />
      <Card.Item label="기간">
        {tripInfo.startDate && tripInfo.endDate
          ? `최소 ${tripInfo.minDays}박 ~ 최대 ${tripInfo.maxDays-1}박 / ${formatTripMonths(tripInfo.startDate, tripInfo.endDate)}`
          : "기간 미정"}
      </Card.Item>
      <S.CustomSpacer />

      <S.TwoSelect>
        <Button size="large" onClick={() => handleVote("BAD")}>
          {"난 못 가.."}
        </Button>
        <Button size="large" onClick={() => handleVote("GOOD")} style={{ backgroundColor: "#3b46fa" }}>
          {"좋아!"}
        </Button>
      </S.TwoSelect>
    </Card>
  );
}
