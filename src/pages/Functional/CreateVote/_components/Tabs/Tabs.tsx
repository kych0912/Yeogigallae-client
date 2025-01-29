import * as S from "./Styles";

export default function Tabs({
  activeTab,
  onTabChange,
}: {
  activeTab: "vote" | "course";
  onTabChange: (tab: "vote" | "course") => void;
}) {
  const tabs = [
    { title: "투표하기", key: "vote" },
    { title: "코스짜기", key: "course" },
  ];

  return (
    <>
      <S.StyledCard>
        {tabs.map((tab) => (
          <S.StyledButton
            key={tab.key}
            size="large"
            $isActive={activeTab === tab.key}
            onClick={() => onTabChange(tab.key as "vote" | "course")}
          >
            {tab.title}
          </S.StyledButton>
        ))}
      </S.StyledCard>
    </>
  );
}