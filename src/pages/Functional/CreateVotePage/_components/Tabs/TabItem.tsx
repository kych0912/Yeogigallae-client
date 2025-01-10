import React from "react";
import * as S from "./Styles";

interface TabItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ title, isActive, onClick }) => {
  return (
    <S.TabItem $active={isActive} onClick={onClick}>
      {title}
    </S.TabItem>
  );
};

export default TabItem;
