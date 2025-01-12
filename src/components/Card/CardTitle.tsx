import * as S from "./Card.styles";

export default function CardTitle({children,className}:{children:React.ReactNode,className?:string}) {
    return (
        <S.ItemWrapper className={className}>     
            <S.Title>
                {children}
            </S.Title>
        </S.ItemWrapper>
    )
}