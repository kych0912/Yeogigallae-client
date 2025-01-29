import * as S from "./Image.styles";
import Card from "../../../../../components/Card";
import Default_image from "../../../../../assets/icons/Default_image.svg";

export default function ImagePlaceholder() {
  return (
    <S.ImagePlaceholder>
      <Card>
        <S.Icon src={Default_image} alt="Default Icon"/>
        <S.Text>원하는 이미지를 첨부하세요.</S.Text>
      </Card>
    </S.ImagePlaceholder>
  );
};

