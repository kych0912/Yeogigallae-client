import { useState } from "react";
import * as S from "./VoteComponent.styles";
import { useVoteContext } from "../../context/VoteResultContext";

export default function VoteComponent({
  step,
}: {
  step: "결과" | "찬성확인" | "반대확인";
}) {
  const { state, dispatch } = useVoteContext();
  const { voteResult } = state;

  const [selected, setSelected] = useState<"GOOD" | "BAD" | null>(
    step === "찬성확인" ? "GOOD" : step === "반대확인" ? "BAD" : null
  );

  const handleVote = (type: "GOOD" | "BAD") => {
    setSelected(type);
    dispatch({ type: "SET_VOTE_TYPE", payload: type });
    dispatch({ type: "SET_VOTE_RESULT", payload: { ...voteResult, type, count: voteResult.count + 1 } });
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
          {selected === "GOOD" && <S.VoteMessage>{voteResult.userName}님의 투표</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteResult.type === "GOOD" ? voteResult.count : voteResult.count}표</S.VoteCounter>
      </S.VoteButton>

      <S.VoteButton
        $isSelected={selected === "BAD"}
        $selectedColor="#f1443b"
        onClick={() => handleVote("BAD")}
      >
        <S.TextWrapper>
          <S.Text>나 못가...</S.Text>
          {selected === "BAD" && <S.VoteMessage>{voteResult.userName}님의 투표</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteResult.type === "BAD" ? voteResult.count : voteResult.count}표</S.VoteCounter>
      </S.VoteButton>
    </S.CustomContainer>
  );
}
