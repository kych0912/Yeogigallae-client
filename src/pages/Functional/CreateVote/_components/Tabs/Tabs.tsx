import * as S from "./Tabs.styles";

interface TabsProps {
  activeTab: "VOTE" | "COURSE";
  onTabChange: (tab: "VOTE" | "COURSE") => void;
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = [
    { title: "투표하기", key: "VOTE" as const },
    { title: "코스짜기", key: "COURSE" as const },
  ];

  return (
    <S.CustomCard>
      {tabs.map(({ title, key }) => (
        <S.StyledButton
          key={key}
          size="large"
          $isActive={activeTab === key}
          onClick={() => activeTab !== key && onTabChange(key)}
        >
          {title}
        </S.StyledButton>
      ))}
    </S.CustomCard>
  );
}
