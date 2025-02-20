import { useEffect, useState } from "react";
import * as S from "./VoteComponent.styles";
import { useVoteResultQuery } from "../../../../react-query/queries/vote/useVoteResultQuerie";

interface VoteComponentProps {
  step: "결과" | "찬성확인" | "반대확인";
  tripId: number;
  userId?: number;
}

export default function VoteComponent({ step, tripId, userId }: VoteComponentProps) {
  const { data: voteResult, isLoading } = useVoteResultQuery(tripId);
  const defaultUserId = userId ?? 999;

  const resultArray = voteResult?.result ?? [];

  const goodVotes = resultArray.filter((vote) => vote.type === "GOOD").length;
  const badVotes = resultArray.filter((vote) => vote.type === "BAD").length;
  const userVote = resultArray.find((vote) => vote.userId === defaultUserId);

  const [selected, setSelected] = useState<"GOOD" | "BAD" | null>(
    userVote ? (userVote.type as "GOOD" | "BAD") : step === "찬성확인" ? "GOOD" : step === "반대확인" ? "BAD" : null
  );

  useEffect(() => {
    if (!userVote) {
      setSelected(step === "찬성확인" ? "GOOD" : step === "반대확인" ? "BAD" : null);
    }
  }, [userVote, step]);

  const handleVote = (type: "GOOD" | "BAD") => {
    setSelected(type);
  };

  if (isLoading) return <p>⏳ 투표 정보를 불러오는 중...</p>;

  return (
    <S.CustomContainer>
      <S.VoteButton
        $isSelected={selected === "GOOD"}
        $selectedColor="#3b46f1"
        onClick={() => handleVote("GOOD")}
      >
        <S.TextWrapper>
          <S.Text>좋아</S.Text>
          {selected === "GOOD" && <S.VoteMessage>{userVote?.userName || "여행자"} 님의 투표</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{goodVotes}표</S.VoteCounter>
      </S.VoteButton>

      <S.VoteButton
        $isSelected={selected === "BAD"}
        $selectedColor="#f1443b"
        onClick={() => handleVote("BAD")}
      >
        <S.TextWrapper>
          <S.Text>나 못가...</S.Text>
          {selected === "BAD" && <S.VoteMessage>{userVote?.userName || "여행자"}님의 투표</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{badVotes}표</S.VoteCounter>
      </S.VoteButton>
    </S.CustomContainer>
  );
}
