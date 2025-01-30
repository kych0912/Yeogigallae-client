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
            <S.Text>각 분야별 평균적인 금액을 계산하여 생성된 예산입니다.</S.Text>
        </S.Container>
    );
};

export default BudgetPage;
