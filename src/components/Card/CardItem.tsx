import * as S from "./Card.styles";

export default function CardItem({ 
    children,  
    className
  }: { 
    children: React.ReactNode;
    className?:string;
  }) {
    return(
        <S.ItemWrapper className={className}>
          {children}
        </S.ItemWrapper>
    )
  }
