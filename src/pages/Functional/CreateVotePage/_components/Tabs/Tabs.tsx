import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TabItem from "./TabItem";
import * as S from "./Styles";

const Tabs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname === "/functional/vote" ? 0 : 1;

  const handleTabClick = (index: number) => {
    if (index === 0) {
      navigate("/functional/vote");
    } else if (index === 1) {
      navigate("/functional/course");
    }
  };

  return (
    <S.TabsContainer>
      <TabItem
        title="투표하기"
        isActive={activeTab === 0}
        onClick={() => handleTabClick(0)}
      />
      <TabItem
        title="코스짜기"
        isActive={activeTab === 1}
        onClick={() => handleTabClick(1)}
      />
    </S.TabsContainer>
  );
};

export default Tabs;
