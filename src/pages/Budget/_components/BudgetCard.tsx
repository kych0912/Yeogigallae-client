import * as S from "./Styles";
import Card from "../../../components/Card";
import { budgetPageDataMock } from "../../../apis/budget/mocks";
import MoneyBag from "../../../assets/icons/MoneyBag.svg";
import LinkIcon from "../../../assets/icons/LinkIcon.svg?react";
import { BudgetInfo } from "../../../apis/budget/types";

interface BudgetCardProps {
    budgetInfo: BudgetInfo | undefined;
}

export default function BudgetCard({ budgetInfo }: BudgetCardProps) {
    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("클립보드에 복사되었습니다:", text);
        });
    };

    const sumPrice = budgetInfo?.dailyAssignments.reduce((acc, day) => {
        return acc + day.assignments.reduce((sum, assignment) => sum + assignment.recommendedAmount, 0);
    }, 0);

    const convertPrice = (price: number) => {
        return price.toLocaleString();
    };

    return (
        <S.BudgetCard>
            <S.Text>{"AI서포터가 추천하는 예산입니다."}</S.Text>

            <S.Title>
                <S.Logo src={MoneyBag} alt="MoneyBag Logo" />
                {convertPrice(Number(sumPrice)) + " 원"}  
                <S.Logo src={MoneyBag} alt="MoneyBag Logo" />
            </S.Title>

            <Card.Divider />
            <S.Text>{"아래는 예산 측정 시 고려한 정보 입니다."}</S.Text>

            <Card.Image>
                <img
                    src={budgetPageDataMock.result.imageUrl}
                    alt="여행 대표 이미지"
                    style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
                />
            </Card.Image>

            <S.CustomWrapper>
                <Card.Item label="장소">
                    {budgetInfo?.location}
                </Card.Item>
                <S.IconWrapper onClick={() => handleCopyToClipboard(budgetInfo?.location ?? "")}>
                    <LinkIcon />
                </S.IconWrapper>
            </S.CustomWrapper>

            <Card.Divider />

            <Card.Item label="기간">
                {budgetInfo?.startDate} ~ {budgetInfo?.endDate}
            </Card.Item>
        </S.BudgetCard>
    );
}
