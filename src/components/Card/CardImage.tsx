import { HTMLAttributes } from "react";
import * as S from "./Card.styles";

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function CardImage({children,className, ...props}:CardImageProps) {
    return <S.Image className={className} {...props}>{children}</S.Image>
}

