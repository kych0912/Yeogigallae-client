import Card from "../../../../components/Card";
import { Button } from "../../../../components/Button";
import { voteData } from "./../../voteData";
import LinkIcon from "../../../../assets/icons/LinkIcon.svg?react";
import ConfirmMessage from "../../ConfirmPage/_components/ConfirmFailCard/ConfirmMessage";
import * as S from "./../../_components/Vote.styles";
import { useNavigate } from "react-router-dom";
import { useVoteStore } from "../../../../store/VoteStore";

export default function VoteCard({
  onAgree,
  onDisagree,
  showConfirmMessage,
}: {
  onAgree?: () => void; 
  onDisagree?: () => void; 
  showConfirmMessage?: boolean;
}) {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("클립보드에 복사되었습니다:", text);
    });
  };
  const navigate = useNavigate();
  const { addVote } = useVoteStore();

  return (
    <S.StyledCard>
      {showConfirmMessage && (
        <>
          <ConfirmMessage />
          <Button
            size="large"
            onClick={() => {
              navigate(`/`);
            }}
          >
            {"확인"}
          </Button>
        </>
      )}
        <Card.Image>
          <img
            src={voteData.imageSrc}
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
            <span>{voteData.location.place}</span> <br />
            <span>{voteData.location.address}</span>
          </S.CustomCardItem>
          <S.IconWrapper onClick={() => handleCopyToClipboard(voteData.location.place)}>
            <LinkIcon />
          </S.IconWrapper>
        </S.CustomWrapper>


        <Card.Divider />
        <Card.Item label="금액">{voteData.price}</Card.Item>

        <Card.Divider />
        <Card.Item label="기간">{voteData.duration}</Card.Item>

        <S.CustomSpacer />

        {onAgree && onDisagree && ( 
          <S.TwoSelect>
            <Button
              size="large"
              onClick={() => {
                addVote("BAD"); 
                onDisagree?.(); 
              }}
            >
              {"난 못 가.."}
            </Button>
            <Button
              size="large"
              onClick={() => {
                addVote("GOOD"); 
                onAgree?.();
              }}
              style={{ backgroundColor: "#3b46fa" }}
            >
              {"좋아!"}
            </Button>
          </S.TwoSelect>
        )}
    </S.StyledCard>
  );
}
