import React from "react";
import * as S from "./Image.styles";
import Default_image from "../../../../../assets/icons/Default_image.svg";

const ImagePlaceholder: React.FC = () => {
  return (
    <S.ImagePlaceholder>
      <S.Default>
        <S.Icon src={Default_image} alt="Default Icon"/>
        <S.Text>원하는 이미지를 첨부하세요.</S.Text>
      </S.Default>
    </S.ImagePlaceholder>
  );
};

export default ImagePlaceholder;
