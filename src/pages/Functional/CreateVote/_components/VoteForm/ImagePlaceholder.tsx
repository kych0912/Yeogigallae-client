import * as S from "./Image.styles";
import Default_image from "../../../../../assets/icons/Default_image.svg";
import modal from "../../../../../components/Modal"; 
import Card from "../../../../../components/Card";
import { useState } from "react";

export default function ImagePlaceholder() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <S.ImagePlaceholder
        $imageUrl={selectedImage || ""} 
        onClick={() => {
          modal.image.show({
            onConfirm: (image: string) => {
              setSelectedImage(image);
            },
            confirmText: "확인",
            cancelText: "취소"
          });
        }}
      >
        {!selectedImage && (
          <Card>
            <S.Icon src={Default_image} alt="Default Icon" />
            <S.Text>원하는 이미지를 첨부하세요.</S.Text>
          </Card>
        )}
      </S.ImagePlaceholder>
    </>
  );
}
