import * as S from "./Card.styles";

export default function CardItem({ 
    children,  
  }: { 
    children: React.ReactNode;
    label?: string;
  }) {
    return(
        <S.ItemWrapper>
          {children}
        </S.ItemWrapper>
    )
  }
