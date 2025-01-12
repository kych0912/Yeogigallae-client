import * as S from "./Card.styles";

export default function CardDivider({className}:{className?:string}) {
    return (
        <> 
            <S.Divider className={className} />
        </>
    )
}

