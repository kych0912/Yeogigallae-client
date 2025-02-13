import * as S from "./Style";
import ImageIcon from "../../../../../assets/icons/Image.svg?react";

export default function AddImage() {
    return (
        <S.AddImage>
            <ImageIcon />
            <S.AddImageText>{"원하는 이미지를 첨부하세요"}</S.AddImageText>
        </S.AddImage>
    )
}