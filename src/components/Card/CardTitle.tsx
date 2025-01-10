import * as S from "./Card.styles";

export default function CardTitle({children}:{children:React.ReactNode}) {
    return (
        <S.ItemWrapper>     
            <S.Title>
                {children}
            </S.Title>
        </S.ItemWrapper>
    )
}