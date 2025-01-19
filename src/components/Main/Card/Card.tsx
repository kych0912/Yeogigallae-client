import * as S from "./Card.styles";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import React from "react";

/**
 * 카드 컴포넌트. 컨텐츠를 배치하여 보여줍니다. Title,Text, Item 컴포넌트를 포함하여 해당 카드에
 * 적절한 컨텐츠를 배치할 수 있습니다.
 * @param children 카드 컨텐츠
 */

function CardRoot({ children, gap }: { children: React.ReactNode; gap?: string }) {
    return (
        <S.Card>
            <S.CardWrapper style={{ gap: gap }}>{children}</S.CardWrapper>
        </S.Card>
    );
}

const Card = Object.assign(CardRoot, {
    Title: CardTitle,
    Text: CardText,
});

export default Card;
