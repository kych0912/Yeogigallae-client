import * as S from "./Card.styles";

export default function CardImage({children,className}:{children:React.ReactNode,className?:string}) {
    return <S.Image className={className}>{children}</S.Image>
}
