import { useVoteResultStore } from "../../../../store/useVoteResultStore";
import { Button } from "../../../../components/Button";
import { dummyData } from "./../../dummyData";
import Card from "../../../../components/Card";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import ConfirmMessage from "../../ConfirmPage/_components/ConfirmFailCard/ConfirmMessage";
import * as S from "./../../_components/Vote.styles";
import { VoteType } from "../../../../types/voteTypes/voteTypes";

export default function VoteCard({
  onAgree,
  onDisagree,
  showConfirmMessage,
}: {
  onAgree?: () => void;
  onDisagree?: () => void;
  showConfirmMessage?: boolean;
}) {
  const { setVoteType } = useVoteResultStore(); 

  const handleVote = (type: VoteType) => {
    setVoteType(type);
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
          src={dummyData.imageSrc}
          alt="placeholder"
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
          <span>{dummyData.location.place}</span> <br />
          <span>{dummyData.location.address}</span>
        </S.CustomCardItem>
        <S.IconWrapper onClick={() =>  handleCopyToClipboard(dummyData.location.place)}>
          <LinkIcon />
        </S.IconWrapper>
      </S.CustomWrapper>

      <Card.Divider />
      <Card.Item label="금액">{dummyData.price}</Card.Item>

      <Card.Divider />
      <Card.Item label="기간">{dummyData.duration}</Card.Item>

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
