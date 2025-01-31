import { useState } from "react";
import * as S from "./VoteComponent.styles";

export default function VoteComponent({
  step,
  voteData,
}: {
  step: "결과" | "찬성확인" | "반대확인";
  voteData: any; // voteData의 타입은 실제 API 데이터 구조에 맞게 설정
}) {
  const [selected, setSelected] = useState<"like" | "dislike" | null>(
    step === "찬성확인" ? "like" : step === "반대확인" ? "dislike" : null
  );
  const [voteMessage, setVoteMessage] = useState<string>(
    step === "찬성확인"
      ? `${voteData.userName}님의 투표`
      : step === "반대확인"
      ? `${voteData.userName}님의 투표`
      : "반대 선택"
  );

  const handleVote = (type: "like" | "dislike") => {
    setSelected(type);
    setVoteMessage(
      type === "like" ? "찬성을 선택하셨습니다." : "반대를 선택하셨습니다."
    );
  };

  return (
    <S.CustomContainer>
      <S.VoteButton
        $isSelected={selected === "like"}
        $selectedColor="#3b46f1"
        onClick={() => handleVote("like")}
      >
        <S.TextWrapper>
          <S.Text>좋아</S.Text>
          {selected === "like" && <S.VoteMessage>{voteMessage}</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteData.votes.like}표</S.VoteCounter> {/* 여기서 voteData 사용 */}
      </S.VoteButton>

      <S.VoteButton
        $isSelected={selected === "dislike"}
        $selectedColor="#f1443b"
        onClick={() => handleVote("dislike")}
      >
        <S.TextWrapper>
          <S.Text>나 못가...</S.Text>
          {selected === "dislike" && <S.VoteMessage>{voteMessage}</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteData.votes.dislike}표</S.VoteCounter> {/* 여기서 voteData 사용 */}
      </S.VoteButton>
    </S.CustomContainer>
  );
}
