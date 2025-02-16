import { useEffect, useState } from "react";
import * as S from "./VoteComponent.styles";
import { useVoteContext } from "../../context/VoteResultContext";

interface VoteComponentProps {
  step: "결과" | "찬성확인" | "반대확인";
  userId?: number; // ❗ userId가 undefined일 수도 있음
}

export default function VoteComponent({ step, userId }: VoteComponentProps) {
  const { state, dispatch } = useVoteContext();
  const { voteResult } = state;

  const defaultUserId = userId ?? 999;

  let userVote = voteResult.find((vote) => vote.userId === defaultUserId);

  const goodVotes = voteResult.filter((vote) => vote.type === "GOOD").length;
  const badVotes = voteResult.filter((vote) => vote.type === "BAD").length;

  const [selected, setSelected] = useState<"GOOD" | "BAD" | null>(
    userVote ? userVote.type : step === "찬성확인" ? "GOOD" : step === "반대확인" ? "BAD" : null
  );

  useEffect(() => {
    if (!userVote) {
      userVote = {
        userId: 12,
        userName: `임시 사용자 ${defaultUserId}`,
        type: selected ?? "GOOD", 
        count: 1, 
      };

      dispatch({ type: "SET_VOTE_RESULT", payload: [...voteResult, userVote] });
    }
  }, [voteResult]);

  const handleVote = (type: "GOOD" | "BAD") => {
    setSelected(type); // ✅ 선택값 즉시 변경하여 UI 반영

    const updatedVotes = voteResult.map((vote) =>
      vote.userId === defaultUserId ? { ...vote, type } : vote
    );

    dispatch({ type: "SET_VOTE_RESULT", payload: updatedVotes });
    dispatch({ type: "SET_VOTE_TYPE", payload: type });
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
          {selected === "GOOD" && <S.VoteMessage>{userVote?.userName}님의 투표</S.VoteMessage>}
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
          {selected === "BAD" && <S.VoteMessage>{userVote?.userName}님의 투표</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{badVotes}표</S.VoteCounter>
      </S.VoteButton>
    </S.CustomContainer>
  );
}
