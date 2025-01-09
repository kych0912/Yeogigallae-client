import React, { useState } from "react";
import TabItem from "./TabItem";
import * as S from "./Styles";

const Tabs: React.FC<{ onTabChange: (index: number) => void }> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabChange(index);
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
