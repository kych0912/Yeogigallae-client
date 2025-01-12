import React, { useEffect, useState } from "react";
import * as S from "./VoteComponent.styles";
import { useLocation } from "react-router-dom";
import { afterData } from "../_data/afterData";

const VoteComponent: React.FC = () => {
  const [selected, setSelected] = useState<"like" | "dislike" | null>(null);
  const location = useLocation(); // 현재 경로 확인

  // 페이지 경로에 따라 상태 초기화
  useEffect(() => {
    if (location.pathname === "/vote/success") {
      setSelected("like");
    } else if (location.pathname === "/vote/fail") {
      setSelected("dislike");
    }
  }, [location.pathname]);

  return (
    <S.Container>
      {/* 좋아 버튼 */}
      <S.VoteButton
        $isSelected={selected === "like"} // 고정된 상태로 렌더링
        $selectedColor="#3b46f1"
      >
        좋아
        <S.VoteCounter>{afterData.votes.like}표</S.VoteCounter>
      </S.VoteButton>

      {/* 나 못가 버튼 */}
      <S.VoteButton
        $isSelected={selected === "dislike"} 
        $selectedColor="#f1443b"
      >
        <S.Text>나 못가...</S.Text>
        <S.VoteCounter>{afterData.votes.dislike}표</S.VoteCounter>
      </S.VoteButton>
    </S.Container>
  );
};

export default VoteComponent;
