// 예산 선택화면, 예산 결정
import React from "react";
import * as S from "./Styles";
import BudgetCard from "../_components/BudgetCard";

const BudgetPage: React.FC = () => {
    return (
        <S.Container>
            <BudgetCard />
        </S.Container>
    );
};

export default BudgetPage;
