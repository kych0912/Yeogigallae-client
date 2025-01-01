import * as S from "./Card.styles";

export default function CardItem({ 
    children, 
    label, 
  }: { 
    children: React.ReactNode;
    label?: string;
  }) {
    return(
        <S.ItemWrapper>
            {label && <S.Label>{label}</S.Label>}
            <S.Content>{children}</S.Content>
        </S.ItemWrapper>
    )
  }
