import React, { useEffect, useState } from "react";
import * as S from "./VoteComponent.styles";
import { useLocation } from "react-router-dom";
import { voteData } from "../../VoteAgreePage/_components/VoteCard/voteData";

const VoteComponent: React.FC = () => {
  const [selected, setSelected] = useState<"like" | "dislike" | null>(null);
  const location = useLocation(); 
  const [voteMessage, setVoteMessage] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/vote/success") {
      setSelected("like");
      setVoteMessage(`${voteData.nickName}님의 투표`);
    } else if (location.pathname === "/vote/fail") {
      setSelected("dislike");
      setVoteMessage(`${voteData.nickName}님의 투표`);
    }
  }, [location.pathname]);

  return (
    <S.Container>
      {/* 좋아 버튼 */}
      <S.VoteButton
        $isSelected={selected === "like"}
        $selectedColor="#3b46f1"
      >
        <S.TextWrapper>
          <S.Text>좋아</S.Text>
          {location.pathname === "/vote/success" && <S.VoteMessage>{voteMessage}</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteData.votes.like}표</S.VoteCounter>
      </S.VoteButton>

      {/* 나 못가 버튼 */}
      <S.VoteButton
        $isSelected={selected === "dislike"} 
        $selectedColor="#f1443b"
      >
        <S.TextWrapper>
          <S.Text>나 못가...</S.Text>
          {location.pathname === "/vote/fail" && <S.VoteMessage>{voteMessage}</S.VoteMessage>}
        </S.TextWrapper>
        <S.VoteCounter>{voteData.votes.dislike}표</S.VoteCounter>
      </S.VoteButton>
    </S.Container>
  );
};

export default VoteComponent;
