import { useState, useEffect } from "react";
import * as S from "./VoteComponent.styles";
import { useVoteContext } from "../../context/VoteResultContext";

interface VoteComponentProps {
  step: "결과" | "찬성확인" | "반대확인";
  userId: number; // userId를 props로 받음
}

export default function VoteComponent({ step, userId }: VoteComponentProps) {
  const { state, dispatch } = useVoteContext();
  const { voteResult } = state;

  const userVote = voteResult.find((vote) => vote.userId === userId);

  // `GOOD`과 `BAD` 투표 개수 계산
  const goodVotes = voteResult.filter((vote) => vote.type === "GOOD").length;
  const badVotes = voteResult.filter((vote) => vote.type === "BAD").length;

  // 기존 선택값 유지
  const [selected, setSelected] = useState<"GOOD" | "BAD" | null>(
    userVote ? userVote.type : step === "찬성확인" ? "GOOD" : step === "반대확인" ? "BAD" : null
  );

  const handleVote = (type: "GOOD" | "BAD") => {
    setSelected(type);
    dispatch({
      type: "SET_VOTE_RESULT",
      payload: voteResult.map((vote) =>
        vote.userId === userId ? { ...vote, type } : vote
      ),
    });
    dispatch({ type: "SET_VOTE_TYPE", payload: type });
  };

  useEffect(() => {
    if (userVote) {
      setSelected(userVote.type);
    }
  }, [userVote]);

  return (
    <S.CustomContainer>
      <S.VoteButton
        $isSelected={selected === "GOOD"}
        $selectedColor="#3b46f1"
        onClick={() => handleVote("GOOD")}
      >
        <S.TextWrapper>
          <S.Text>좋아</S.Text>
          {selected === "GOOD" && (
            <S.VoteMessage>
              {userVote ? `${userVote.userName}님의 투표` : "투표 완료"}
            </S.VoteMessage>
          )}
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
          {selected === "BAD" && (
            <S.VoteMessage>
              {userVote ? `${userVote.userName}님의 투표` : "투표 완료"}
            </S.VoteMessage>
          )}
        </S.TextWrapper>
        <S.VoteCounter>{badVotes}표</S.VoteCounter>
      </S.VoteButton>
    </S.CustomContainer>
  );
}
