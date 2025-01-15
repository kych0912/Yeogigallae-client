import * as S from "./Card.styles";

export default function CardText({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <S.ItemWrapper className={className}>
            <S.Text>{children}</S.Text>
        </S.ItemWrapper>
    );
}
