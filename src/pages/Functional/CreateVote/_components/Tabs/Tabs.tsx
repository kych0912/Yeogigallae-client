import React from "react";
import { Button } from "../../../../../components/Button";
import * as S from "./Styles";

const Tabs: React.FC<{
  activeTab: "vote" | "course";
  onTabChange: (tab: "vote" | "course") => void;
}> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { title: "투표하기", key: "vote" },
    { title: "코스짜기", key: "course" },
  ];

  return (
    <S.TabsContainer>
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          size="large"
          style={{
            width: "50%",
            backgroundColor: activeTab === tab.key ? "#222222" : "#252525",
            color: activeTab === tab.key ? "#fff" : "#616161",
            border: "none", // 버튼 테두리 제거
            transition: "background-color 0.3s ease, color 0.3s ease", // 부드러운 전환 효과
          }}
          onClick={() => onTabChange(tab.key as "vote" | "course")}
        >
          {tab.title}
        </Button>
      ))}
    </S.TabsContainer>
  );
};

export default Tabs;
