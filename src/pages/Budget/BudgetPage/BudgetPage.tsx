// 예산 선택화면, 예산 결정
import React from "react";
import * as S from "./Styles";
import BudgetCard from "../_components/BudgetCard";
import BudgetInfoCard from "../_components/BudgetInfoCard";

const BudgetPage: React.FC = () => {
    return (
        <S.Container>
            <BudgetCard />
            <BudgetInfoCard />
        </S.Container>
    );
};

export default BudgetPage;
