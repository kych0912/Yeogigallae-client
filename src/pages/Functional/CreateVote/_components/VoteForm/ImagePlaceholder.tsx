import { useState } from "react";
import * as S from "./Image.styles";
import Card from "../../../../../components/Card";
import Default_image from "../../../../../assets/icons/Default_image.svg";
import SelectModal from "../../../../../components/Modal/ImageModal";

export default function ImagePlaceholder() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <S.ImagePlaceholder onClick={() => setIsOpen(true)}> 
        <Card>
          <S.Icon src={Default_image} alt="Default Icon" />
          <S.Text>원하는 이미지를 첨부하세요.</S.Text>
        </Card>
      </S.ImagePlaceholder>

      <SelectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
