import { useState } from "react";
import * as S from "./VoteComponent.styles";

export default function VoteComponent({
  step,
  voteData,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  voteData: any;
}) {
  const [selected, setSelected] = useState<"GOOD" | "BAD" | null>(
    step === "찬성확인" ? "GOOD" : step === "반대확인" ? "BAD" : null
  );
  const [voteMessage, setVoteMessage] = useState<string>(
    step === "찬성확인"
      ? `${voteData.userName}님의 투표`
      : step === "반대확인"
      ? `${voteData.userName}님의 투표`
      : "반대 선택"
  );

  const handleVote = (type: "GOOD" | "BAD") => {
    setSelected(type);
    setVoteMessage(
      type === "GOOD" ? "찬성을 선택하셨습니다." : "반대를 선택하셨습니다."
    );
  };

  return (
    <S.CustomContainer>
      <S.VoteButton
        $isSelected={selected === "GOOD"}
        $selectedColor="#3b46f1"
        onClick={() => handleVote("GOOD")}
      >
        <S.TextWrapper>
          <S.Text>좋아</S.Text>
          {selected === "GOOD" && <S.VoteMessage>{voteMessage}</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteData.votes.like}표</S.VoteCounter>
      </S.VoteButton>

      <S.VoteButton
        $isSelected={selected === "BAD"}
        $selectedColor="#f1443b"
        onClick={() => handleVote("BAD")}
      >
        <S.TextWrapper>
          <S.Text>나 못가...</S.Text>
          {selected === "BAD" && <S.VoteMessage>{voteMessage}</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteData.votes.dislike}표</S.VoteCounter> 
      </S.VoteButton>
    </S.CustomContainer>
  );
}
