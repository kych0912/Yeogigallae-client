import { useState, useEffect } from "react";
import { useController, Control } from "react-hook-form";
import * as S from "./Image.styles";
import Card from "../../../../../components/Card";
import Default_image from "../../../../../assets/icons/Default_image.svg";
import SelectModal from "../../../../../components/Modal/ImageModal";

interface ImagePlaceholderProps {
  control: Control<any>;
  tripPlanType: "VOTE" | "COURSE"; // ✅ tripPlanType 추가
}

export default function ImagePlaceholder({ control, tripPlanType }: ImagePlaceholderProps) {
  const { field } = useController({
    name: tripPlanType === "VOTE" ? "imageUrl_VOTE" : "imageUrl_COURSE", // ✅ 각 탭별로 imageUrl 분리
    control,
    defaultValue: "",
  });

  const [image, setImage] = useState(field.value);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setImage(field.value);
  }, [field.value]);

  return (
    <>
      <S.ImagePlaceholder onClick={() => setIsOpen(true)}>
        <Card>
          <S.Icon src={image || Default_image} alt="Selected Image" />
          <S.Text>{image ? "이미지를 변경하세요." : "원하는 이미지를 첨부하세요."}</S.Text>
        </Card>
      </S.ImagePlaceholder>

      <SelectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
