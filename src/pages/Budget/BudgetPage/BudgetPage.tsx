import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Styles";
import BudgetCard from "../_components/BudgetCard";
import BudgetInfoCard from "../_components/BudgetInfoCard";
import { CardSkeleton, InfoCardSkeleton } from "../_components/CardSkeleton";

const BudgetPage: React.FC = () => {
    const { budgetId } = useParams<{ budgetId?: string }>(); 
    const numericBudgetId = budgetId ? Number(budgetId) : 1; 

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <S.Container>
            {isLoading ? (
                <>
                    <CardSkeleton />
                    <InfoCardSkeleton />
                </>
            ) : (
                <>
                    <BudgetCard  />
                    <BudgetInfoCard budgetId={numericBudgetId} />
                </>
            )}

            <S.Text>각 분야별 평균적인 금액을 계산하여 생성된 예산입니다.</S.Text>
        </S.Container>
    );
};

export default BudgetPage;
