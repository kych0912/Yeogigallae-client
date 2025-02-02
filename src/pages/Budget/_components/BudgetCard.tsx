// 예산 선택화면, 예산 결정
import * as S from "./Styles";
import Card from "../../../components/Card";
import { budgetPageData } from "../test";
import MoneyBag from "../../../assets/icons/MoneyBag.svg";
import LinkIcon from "../../../assets/icons/LinkIcon.svg?react";

export default function BudgetCard() {
    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("클립보드에 복사되었습니다:", text);
        });
    };
    return (
        <S.BudgetCard>
            <S.Text>{"AI서포터가 추천하는 예산입니다."}</S.Text>

            <S.Title>
                <S.Logo src={MoneyBag} alt="MoneyBag Logo" />
                최소 {budgetPageData.priceRange.min}만원~ 최대{budgetPageData.priceRange.max}만원
                <S.Logo src={MoneyBag} alt="MoneyBag Logo" />
            </S.Title>
            <Card.Divider />
            <S.Text>{"아래는 예산 측정 시 고려한 정보 입니다."}</S.Text>
            <Card.Image>
                <img src="https://i.namu.wiki/i/uH7NzgRSXa3ilcIkybwnrfVRdHM3DQC6MnbNoKk1K3Grz-NIKd7KB4UiuTBLXihaxv1iRk8gw6ngUw6ITP6RVQ.webp" alt="placeholder" style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }} />
            </Card.Image>

            <S.CustomWrapper>
                <Card.Item label="장소"> {budgetPageData.location} </Card.Item>
                <S.IconWrapper onClick={() => handleCopyToClipboard(budgetPageData.location)}>
                    <LinkIcon />
                </S.IconWrapper>
            </S.CustomWrapper>

            <Card.Divider />
            <Card.Item label="기간">
                {budgetPageData.period.nights}박/ {budgetPageData.period.startDate}~ {budgetPageData.period.endDate}
            </Card.Item>
        </S.BudgetCard>
    );
}
