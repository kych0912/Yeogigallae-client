import Plus from "../../../../../assets/icons/Plus.svg?react";
import * as S from "./Style";

export default function AddPlace(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <S.AddPlaceButton {...props}>
            <Plus />
            <p>장소 추가하기</p>
        </S.AddPlaceButton>
    )
}
