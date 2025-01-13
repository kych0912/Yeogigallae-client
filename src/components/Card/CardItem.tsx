import * as S from "./Card.styles";

export default function CardItem({ 
    children,  
    className,
    label
  }: { 
    children: React.ReactNode;
    className?:string;
    label?:string;
  }) {

    if(label){
      return(
        <S.ItemWrapper className={className}>
          <S.Label>{label}</S.Label>
          <S.Content>{children}</S.Content>
        </S.ItemWrapper>
      )
    }

    return(
        <S.ItemWrapper className={className}>
          {children}
        </S.ItemWrapper>
    )
  }
