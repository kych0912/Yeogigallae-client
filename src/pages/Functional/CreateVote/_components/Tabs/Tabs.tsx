import { useEffect, useState } from "react";
import * as S from "./Tabs.styles";
import { setGlobalLoadingState } from "../../../Skeleton/SkeletonForm"; 

interface TabsProps {
  activeTab: "SCHEDULE" | "COURSE";
  onTabChange: (tab: "SCHEDULE" | "COURSE") => void;
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setGlobalLoadingState(true); 
    setTimeout(() => {
      setIsLoading(false);
      setGlobalLoadingState(false);
    }, 1000);
  }, []); 

  const tabs = [
    { title: "투표하기", key: "SCHEDULE" as const },
    { title: "코스짜기", key: "COURSE" as const },
  ];

  const handleTabChange = (key: "SCHEDULE" | "COURSE") => {
    if (activeTab !== key) {
      setIsLoading(true);
      setGlobalLoadingState(true);

      onTabChange(key);
      
      setTimeout(() => {
        onTabChange(key);
        setIsLoading(false);
        setGlobalLoadingState(false);
      }, 1000);
    }
  };

  return (
    <S.CustomCard>
      {tabs.map(({ title, key }) => (
        <S.StyledButton
          key={key}
          size="large"
          $isActive={activeTab === key}
          onClick={() => handleTabChange(key)}
          disabled={isLoading}
        >
          {title}
        </S.StyledButton>
      ))}
    </S.CustomCard>
  );
}
